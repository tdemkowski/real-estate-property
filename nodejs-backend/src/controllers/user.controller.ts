import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user.service'
import BaseController from './base.controller'
import { User } from '../entities/user.entity'
import { Router } from 'express'
import OKSuccess from './success/OK.success'
import BadRequest from './exceptions/BadRequest.exception'
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
        this.router.get(this.path + '/:username', this.GetByUsername)
        this.router.get(this.path, this.FetchAll)
        super.initializeRoutes()
    }

    public FetchAll = async (req: Request, res: Response, next: NextFunction) => {
        const { take } = req.query
        const findAll = await this.service.FindAll({ take: Number(take) })
        if (findAll) {
            new OKSuccess(res, { response: findAll })
        } else {
            next(new BadRequest(findAll))
        }
    }

    public GetByUsername = async (req: Request, res: Response, next: NextFunction) => {
        // const obj = await this.service.FindOne({ where: { username: req.params.username } })
        const obj = await this.service.FindOne({ username: req.params.username })
        if (obj) {
            new OKSuccess(res, obj)
        } else {
            next(new NotFoundException(req.params.username))
        }
    }
}
export interface UserDTO {
    username: string
    age: number
}

export default UserController
