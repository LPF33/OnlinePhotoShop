import { Router } from "express";
import { getData } from "./controllers";

const router: Router = Router();

router.get("/api/data", getData);

export default router;
