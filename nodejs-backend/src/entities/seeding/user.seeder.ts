import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from '../user.entity'
import { Post } from '../post.entity'

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, _connection: Connection): Promise<any> {
        await factory(User)()
            .map(async (user: User) => {
                const numberOfPosts = 40 + Math.floor(Math.random() * 150)
                const posts = await factory(Post)().createMany(numberOfPosts)
                user.posts = posts
                return user
            })
            .createMany(3)
    }
}
