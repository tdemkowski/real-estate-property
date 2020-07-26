import 'dotenv/config';
import express = require('express');
import UserController from './controllers/user.controller';
import { createConnection } from 'typeorm';
import bodyParser = require('body-parser');
import { Application } from 'express';
import errorMiddleware from './middlewares/error.middleware';

class App {
  public app: Application;
  public port: number;
  readonly basePath = '/api';
 
  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    // we must initialize error handling last!
    this.initializeErrorHandling();
  }
 
  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers): void {
    controllers.forEach((controller) => {
      this.app.use(this.basePath, controller.router);
    });
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }
 
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

}
 
createConnection().then( () => {
  const app = new App(
    [
      new UserController(),
    ],
    3002,
  );
  
  app.listen();
})
