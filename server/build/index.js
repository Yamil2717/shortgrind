"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
class config {
    constructor() {
        this.app = express_1.default();
        this.root();
        this.router();
    }
    root() {
        this.app.set('port', 3001);
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default('combined'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    router() {
        this.app.use(routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on', this.app.get('port'));
        });
    }
}
;
const runningexpress = new config;
runningexpress.start();
