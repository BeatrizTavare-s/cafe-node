"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCafe = void 0;
var cafeController_1 = require("../controllers/cafeController");
var express_1 = require("express");
var routerCafe = (0, express_1.Router)();
exports.routerCafe = routerCafe;
routerCafe.get('/cafe', cafeController_1.cafeController.get);
