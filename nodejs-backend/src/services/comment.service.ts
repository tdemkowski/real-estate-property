import BaseService from './base.service'
import { Comment } from '../entities/comment.entity'
import { getRepository } from 'typeorm'

class CommentService extends BaseService<Comment> {
    constructor() {
        super(getRepository(Comment))
    }
}

export default CommentService
