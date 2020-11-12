import { Response, Request } from "express";
import { compare, hash } from "../utils/bcrypt";
import database from "../database";
import { generateToken } from "../utils/generateToken";
import { checkEmail, checkName, checkPassword } from "../utils/validation";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

interface TUser {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    isAdmin: boolean;
}

interface TRegisterRequestBody extends Request {
    body: {
        email: string;
        name: string;
        password: string;
    };
}

interface TLoginRequestBody extends Request {
    body: {
        email: string;
        password: string;
    };
}

const registerUser = async (req: TRegisterRequestBody, res: Response) => {
    const { email, name, password } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("Please, fill in all fields");
        }

        if (
            !checkEmail(email)[0] ||
            !checkName("name", name) ||
            !checkPassword(password)
        ) {
            throw new Error("You manipulated the validation process");
        }

        const hashedPassword = await hash(password);
        await database.query(
            "INSERT INTO users (name, email, password) VALUES (?,?,?);",
            [name, email, hashedPassword]
        );
        const [
            userQuery,
        ] = await database.query("SELECT * from users WHERE email = ?;", [
            email,
        ]);

        if (Array.isArray(userQuery) && userQuery.length > 0) {
            const user = userQuery[0] as TUser;
            res.json({
                success: true,
                token: generateToken(user.id, user.name, Boolean(user.isAdmin)),
                error: "",
            });
        } else {
            throw new Error("Server Error");
        }
    } catch (err) {
        if (err.errno === 1062) {
            return res.json({
                success: false,
                token: "",
                error: "Please, try a different email address!",
            });
        }
        res.json({
            success: false,
            token: "",
            error: err.message,
        });
    }
};

const loginUser = async (req: TLoginRequestBody, res: Response) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw new Error("Please, fill in all fields");
        }

        const [
            userQuery,
        ] = await database.query("SELECT * from users WHERE email = ?", [
            email,
        ]);

        if (Array.isArray(userQuery) && userQuery.length > 0) {
            const user = userQuery[0] as TUser;
            const checkedPassword = await compare(password, user.password);

            if (checkedPassword) {
                return res.json({
                    success: true,
                    token: generateToken(
                        user.id,
                        user.name,
                        Boolean(user.isAdmin)
                    ),
                    error: "",
                });
            }
        }
        throw new Error("Your email or password is not correct");
    } catch (err) {
        res.json({
            success: false,
            token: "",
            error: err.message,
        });
    }
};

export { loginUser, registerUser };
