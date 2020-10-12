"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = express_1.Router();
router.get("/api/category/:type", controllers_1.getCategoryProducts);
router.get("/api/category", controllers_1.getCategory);
router.get("/api/product/:category/:id", controllers_1.getSingleProduct);
exports.default = router;
