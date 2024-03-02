"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
// import {  router } from "./routes/index";
var cafeRoute_1 = require("./routes/cafeRoute");
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    App.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    App.prototype.router = function () {
        this.server.use(cafeRoute_1.routerCafe);
    };
    return App;
}());
exports.App = App;
