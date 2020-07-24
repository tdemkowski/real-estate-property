import { getConnection, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

class UserService {
    private userRepository: Repository<User> = getConnection().getRepository(User);
    
    public async getUser(id: string) {
        const user = await this.userRepository.findOne(id);
        return user;
    }
}

export default UserService;