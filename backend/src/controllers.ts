import { Response, Request } from "express";
import database from "./database";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const getCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const [result] = await database.query(
            "SELECT category, categories, image FROM products GROUP BY category;"
        );
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
};

const getCategoryProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { type } = req.params;
    try {
        const [
            result,
        ] = await database.query(
            "SELECT * FROM products where categories = ?;",
            [type]
        );
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
};

const postLogin = (req: Request, res: Response): void => {
    const { name, password } = req.params;
    res.send({ name, password });
};

export { getCategory, getCategoryProducts };
