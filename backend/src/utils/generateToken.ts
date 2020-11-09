import jwt from "jsonwebtoken";

export const generateToken = (id: number, name: string, isAdmin: boolean) => {
    return jwt.sign(
        { id, name, isAdmin },
        process.env.JWT_SECRETTOKEN as string,
        {
            expiresIn: "1d",
        }
    );
};
