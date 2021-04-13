import { Request, Response } from 'express';
import mysql from '../config/db';
import Hashes from './hashes';
const mysqlAsync = mysql.promise();

class Modules {
    public async Register ( req:Request, res:Response ):Promise<void> {
        await mysqlAsync.query('INSERT INTO users SET ?', req.body)
            .then( ([res, field]) => {
                console.log(res);
            })
            .catch( (errors) => {
                console.log('Errors:', errors);
            })
    }
    public async Login ( req:Request, res:Response ):Promise<void> {
        await mysqlAsync.query('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password])
            .then( ([result, field]) => {
                let data:any = result;
                switch (data.length) {
                    case 0:
                        res.json({loggedIn: false, message: `User doesn't exist`});
                        break;
                    case 1:
                        res.json({loggedIn: true, username: req.body.username});
                        break;
                    default:
                        res.json({loggedIn: false, message: 'Wrong username or password'});
                        break;
                }
            })
            .catch( (errors) => {
                console.log('Errors:', errors);
            })
    }
}

export default new Modules;