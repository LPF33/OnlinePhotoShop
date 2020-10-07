import { Response, Request } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const getLogin = (req: Request, res: Response): void => {
    const { name, password } = req.body;
    res.send({ name, password });
};

const postLogin = (req: Request, res: Response): void => {
    const { name, password } = req.body;
    res.send({ name, password });
};

export { getLogin, postLogin };
