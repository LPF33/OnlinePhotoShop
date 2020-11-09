import { Router } from "express";
import {
    getCategory,
    getCategoryProducts,
    getSingleProduct,
    getBestRatedProducts,
    getSearchProducts,
} from "./controllers/shop";

import { loginUser, registerUser } from "./controllers/authentication";

const router: Router = Router();

router.get("/api/category/:type", getCategoryProducts);
router.get("/api/category", getCategory);
router.get("/api/product/:id", getSingleProduct);
router.get("/api/bestproducts", getBestRatedProducts);
router.get("/api/searchproducts/:search/:startId", getSearchProducts);
router.get("/api/searchproducts/:search", getSearchProducts);

router.post("/api/auth/login", loginUser);
router.post("/api/auth/registration", registerUser);

export default router;
