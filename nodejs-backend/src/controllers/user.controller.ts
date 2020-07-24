import { Router } from 'express';
import UserService from '../services/user.service';
import NotFoundException from './exceptions/NotFound.exception';
class UserController {
    public path = '/user';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path + '/:userId', this.getUserById);
    }


    getUserById = async (req, res, next) => {
        const userService = new UserService();
        const user = await userService.getUser(req.params.userId);
        console.log(user);
        if (user) {
            res.status(200).send(user);
        } else {
           next(new NotFoundException(req.params.userId));
        }
    }

}
export default UserController;