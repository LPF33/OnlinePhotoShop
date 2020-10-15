import { Router } from "express";
import {
    getCategory,
    getCategoryProducts,
    getSingleProduct,
    getBestRatedProducts,
    getSearchProducts,
} from "./controllers";

const router: Router = Router();

router.get("/api/category/:type", getCategoryProducts);
router.get("/api/category", getCategory);
router.get("/api/product/:category/:id", getSingleProduct);
router.get("/api/bestproducts", getBestRatedProducts);
router.get("/api/searchproducts/:search", getSearchProducts);

export default router;
