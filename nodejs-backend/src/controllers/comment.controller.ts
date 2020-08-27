import { Request, Response, NextFunction } from 'express'
import CommentService from '../services/comment.service'
import BaseController from './base.controller'
import { Router } from 'express'
import NotFoundException from './exceptions/NotFound.exception'
import { Comment } from '../entities/comment.entity'

class CommentController extends BaseController<Comment, CommentDTO> {
    public path = '/user'
    public router = Router()

    constructor() {
        super('/user', new CommentService())
        this.initializeRoutes()
    }

    public initializeRoutes() {
        // register any other routes here
        super.initializeRoutes()
    }

    public GetByUserId = async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.userId
        const comments = await this.service.FindAll()
        if (comments) {
            res.send(comments)
        } else {
            next(new NotFoundException(userId))
        }
    }

    public GetByCommentId = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const comment = await this.service.FindOne(id)
        if (comment) {
            res.send(comment)
        } else {
            next(new NotFoundException(id))
        }
    }
}

export interface CommentDTO {
    userId: string
    avatar: string
    text: string
}

export default CommentController
