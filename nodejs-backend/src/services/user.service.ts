import { getRepository } from 'typeorm'
import { User } from '../entities/user.entity'
import BaseService from './base.service'

class UserService extends BaseService<User> {
    constructor() {
        super(getRepository(User))
    }
}

export default UserService
