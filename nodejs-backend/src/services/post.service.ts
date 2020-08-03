import BaseService from './base.service'
import { Post } from '../entities/post.entity'
import { getRepository } from 'typeorm'

class PostService extends BaseService<Post> {
    constructor() {
        super(getRepository(Post))
    }
}

export default PostService
