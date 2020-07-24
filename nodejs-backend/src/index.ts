import 'dotenv/config';
import * as express from 'express';
import UserController from './controllers/user.controller';
import { createConnection } from 'typeorm';
import bodyParser = require('body-parser');
import { Application } from 'express';

class App {
  public app: Application;
  public port: number;
  readonly basePath = '/api';
 
  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;
 
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use(this.basePath, controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }


  public connectToTheDatabase()  {
    createConnection();
  }
}
 

const app = new App(
  [
    new UserController(),
  ],
  3001,
);
 
app.listen();