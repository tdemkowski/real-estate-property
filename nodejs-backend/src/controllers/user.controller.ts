import { Router } from 'express';
import UserService from '../services/user.service';
import BaseController from './base.controller';
import { User } from '../entities/user.entity';
class UserController extends BaseController<User, UserDTO>{
    public path = '/user';
    public router = Router();

    constructor() {
        super('/user', new UserService());
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // register any other routes here
        super.initializeRoutes()
    }
}
export default UserController;


interface UserDTO {
    username: string;
    age: number;
}