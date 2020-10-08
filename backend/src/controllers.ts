import { Response, Request } from "express";
import database from "./database";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const getData = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await database.query(
            "SELECT * FROM products where id = 5;"
        );
        res.json({ result: result[0] });
    } catch (err) {
        res.json({ err });
    }
};

const postLogin = (req: Request, res: Response): void => {
    const { name, password } = req.body;
    res.send({ name, password });
};

export { getData, postLogin };
