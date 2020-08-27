import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user.service'
import BaseController from './base.controller'
import { User } from '../entities/user.entity'
import { Router } from 'express'
import NotFoundException from './exceptions/NotFound.exception'

class UserController extends BaseController<User, UserDTO> {
    public path = '/user'
    public router = Router()

    constructor() {
        super('/user', new UserService())
        this.initializeRoutes()
    }

    public initializeRoutes() {
        // register any other routes here
        super.initializeRoutes()
    }

    public GetById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        console.log(id)
        const user = await this.service.FindOne(id, {
            relations: ['posts'],
        })
        if (user) {
            res.send(user)
        } else {
            next(new NotFoundException(id))
        }
    }
}
export interface UserDTO {
    username: string
    age: number
}

export default UserController
