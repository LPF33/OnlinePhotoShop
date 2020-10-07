"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = express_1.Router();
router.get("/api/login", controllers_1.getLogin);
exports.default = router;
