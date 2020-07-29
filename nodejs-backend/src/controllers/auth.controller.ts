import UserService from '../services/user.service'
import { Router, NextFunction, Request, Response } from 'express'
import BadRequest from './exceptions/BadRequest.exception'

class AuthController {
    public path = '/auth'
    public router = Router()
    public userService: UserService

    constructor() {
        this.userService = new UserService()
        this.initializeRoutes()
    }

    public initializeRoutes() {
        // register any other routes here
        this.router.post(this.path + '/signin')
        this.router.post(this.path + '/signup', this.SignUp)
    }

    public SignUp = async (req: Request, res: Response, next: NextFunction) => {
        const email = req.body.email
        const fullName = req.body.fullName
        const username = req.body.username
        const password = req.body.password
        const user = { email, fullName, username, password }

        if (email && fullName && username && password) {
            const accountExists = await this.userService.FindAll({ where: [{ username: username }, { email: email }] })
            if (accountExists.total) {
                next(new BadRequest('Email/username already exists' + accountExists.total))
            } else {
                await this.userService.Create(user)
                res.send({ response: 'Account added' }) // can we implement  an OkCreate that will replace this line with OkCreate(res) ?
            }
        } else {
            next(new BadRequest('All fields must be filled'))
        }
    }
}

export default AuthController
