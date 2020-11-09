import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function protectJWT(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.header("authorization");

    if (!token) {
        return res.status(401);
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRETTOKEN as string);

        next();
    } catch (err) {
        return res.status(401);
    }
}
