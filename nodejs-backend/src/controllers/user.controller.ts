import { Router } from 'express';
import UserService from '../services/user.service';
class UserController {
    public path = '/user';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path + '/:userId', this.getUserById);
    }


    getUserById = async (req, res) => {
        const userService = new UserService();
        const user = await userService.getUser(req.params.userId);
        console.log(user);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send();
        }
    }

}
export default UserController;