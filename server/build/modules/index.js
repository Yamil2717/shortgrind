"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const mysqlAsync = db_1.default.promise();
class Modules {
    Register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mysqlAsync.query('INSERT INTO users SET ?', req.body)
                .then(([res, field]) => {
                console.log(res);
            })
                .catch((errors) => {
                console.log('Errors:', errors);
            });
        });
    }
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mysqlAsync.query('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password])
                .then(([result, field]) => {
                let data = result;
                switch (data.length) {
                    case 0:
                        res.json({ loggedIn: false, message: `User doesn't exist` });
                        break;
                    case 1:
                        res.json({ loggedIn: true, username: req.body.username });
                        break;
                    default:
                        res.json({ loggedIn: false, message: 'Wrong username or password' });
                        break;
                }
            })
                .catch((errors) => {
                console.log('Errors:', errors);
            });
        });
    }
}
exports.default = new Modules;
