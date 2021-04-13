"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Hashes {
    hashPassword(user, password) {
        let result = user.toUpperCase().trim() + password.toUpperCase().trim();
        return crypto_1.default.createHash('sha1', result.toUpperCase().trim());
    }
    hashRandom() {
        let numberRandom = Math.floor(Math.random() * 1000000) + 17;
        return numberRandom;
        //return crypto.createHash('sha256', numberRandom.toString());
    }
}
exports.default = new Hashes();
