import { Request, Response, NextFunction } from 'express'
import PostService from '../services/post.service'
import BaseController from './base.controller'
import { Router } from 'express'
import NotFoundException from './exceptions/NotFound.exception'
import { Post } from '../entities/post.entity'
import { User } from '../entities/user.entity'
import OKSuccess from './success/OK.success'
import BadRequest from './exceptions/BadRequest.exception'

class PostController extends BaseController<Post, PostDTO> {
    public path = '/p'
    public router = Router()

    constructor() {
        super('/p', new PostService())
        this.initializeRoutes()
    }

    public initializeRoutes() {
        // register any other routes here
        this.router.get(this.path + '/:id', this.GetById)
        this.router.get(this.path, this.FetchAll)
        super.initializeRoutes()
    }

    public FetchAll = async (req: Request, res: Response, next: NextFunction) => {
        const { take, skip } = req.query
        const findAll = await this.service.FindAll({ relations: ['user'], take: Number(take), skip: Number(skip) })
        console.log(findAll)
        if (findAll) {
            next(new OKSuccess(res, { response: findAll }))
        } else {
            next(new BadRequest(findAll))
        }
    }

    public GetById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const post = await this.service.FindOne(id, {
            relations: ['user'],
        })
        if (post) {
            res.send(post)
        } else {
            next(new NotFoundException(id))
        }
    }
}

export interface PostDTO {
    user: User
    comments: Comment[]
    imageUrl: string
    text: string
}

export default PostController
