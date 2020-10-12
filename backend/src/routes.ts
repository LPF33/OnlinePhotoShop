import { Router } from "express";
import { getCategory, getCategoryProducts } from "./controllers";

const router: Router = Router();

router.get("/api/category/:type", getCategoryProducts);
router.get("/api/category", getCategory);

export default router;
