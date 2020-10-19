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

const getBestRatedProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const [result] = await database.query(
            "SELECT id, categories, name, image, rating FROM products ORDER BY rating DESC LIMIT 5;"
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

const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
    const { category, id } = req.params;
    try {
        const [
            result,
        ] = await database.query(
            "SELECT * FROM products where categories = ? AND id = ?;",
            [category, id]
        );
        res.json({ success: true, result });
    } catch (err) {
        res.json({ success: false, err });
    }
};

const getSearchProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    let { search, startId } = req.params;
    let id: number = 0;
    if (startId) {
        id = parseInt(startId);
    }
    if (search === "all") {
        search = "";
    }

    try {
        const [
            result,
        ] = await database.query(
            "SELECT * FROM products WHERE (LOWER(name) LIKE ? OR LOWER(categories) LIKE ? OR LOWER(brand) LIKE ?) AND id > ?  ORDER BY id ASC;",
            ["%" + search + "%", "%" + search + "%", "%" + search + "%", id]
        );
        if (Array.isArray(result) && result.length > 0) {
            res.json({ success: true, result });
        } else {
            res.json({ success: false, result });
        }
    } catch (err) {
        res.json({ success: false, err });
    }
};

export {
    getCategory,
    getCategoryProducts,
    getSingleProduct,
    getBestRatedProducts,
    getSearchProducts,
};
