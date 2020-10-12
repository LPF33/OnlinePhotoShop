import { Router } from "express";
import {
    getCategory,
    getCategoryProducts,
    getSingleProduct,
} from "./controllers";

const router: Router = Router();

router.get("/api/category/:type", getCategoryProducts);
router.get("/api/category", getCategory);
router.get("/api/product/:category/:id", getSingleProduct);

export default router;
