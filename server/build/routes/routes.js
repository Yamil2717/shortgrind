"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../modules/index"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.configRouter();
    }
    configRouter() {
        this.router.post('/user/sign-up', index_1.default.Register);
        this.router.post('/user/login', index_1.default.Login);
    }
}
exports.default = new Routes().router;
