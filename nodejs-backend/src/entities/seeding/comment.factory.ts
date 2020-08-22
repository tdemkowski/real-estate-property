import { define } from 'typeorm-seeding'
import { Comment } from '../comment.entity'
import * as Faker from 'faker'

define(Comment, (faker: typeof Faker) => {
    const text = faker.lorem.sentence(30, 150)

    const comment = new Comment()
    comment.text = text
    return comment
})
