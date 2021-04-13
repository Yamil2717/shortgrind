import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './routes/routes';

class config {
    public app:Application;
    constructor() {
        this.app = express();
        this.root();
        this.router();
    }
    root():void {
        this.app.set('port', 3001);
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('combined'));
        this.app.use(express.urlencoded({extended: false}));
    }
    router():void {
        this.app.use(Routes);
    }
    start():void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on', this.app.get('port'));
        });
    }
};

const runningexpress = new config;
runningexpress.start();