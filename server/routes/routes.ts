import { Router, Request, Response, NextFunction } from 'express';
import Modules from '../modules/index';

class Routes {
    router:Router = Router();
    constructor() {
        this.configRouter();
    }
    configRouter():void {
        this.router.post('/user/sign-up', Modules.Register);
        this.router.post('/user/login', Modules.Login);
    }
}

export default new Routes().router;