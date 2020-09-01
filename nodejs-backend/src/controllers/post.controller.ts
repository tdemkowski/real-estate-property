import { Request, Response, NextFunction } from 'express'
import PostService from '../services/post.service'
import BaseController from './base.controller'
import { Router } from 'express'
import NotFoundException from './exceptions/NotFound.exception'
import { Post } from '../entities/post.entity'
import { User } from '../entities/user.entity'

class PostController extends BaseController<Post, PostDTO> {
    public path = '/p'
    public router = Router()

    constructor() {
        super('/p', new PostService())
        this.initializeRoutes()
    }

    public initializeRoutes() {
        // register any other routes here
        super.initializeRoutes()
        this.router.get(this.path + '/:id', this.GetById)
    }

    public GetById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        console.log(id)
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
