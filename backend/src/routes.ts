import { Router } from "express";
import { getLogin } from "./controllers";

const router: Router = Router();

router.get("/api/login", getLogin);

export default router;
