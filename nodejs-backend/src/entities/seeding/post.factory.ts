import { define, factory } from "typeorm-seeding"
import { Post } from "../post.entity"
import { User } from "../user.entity"
import * as Faker from 'faker'

define(Post, (faker: typeof Faker) => {
    const text = faker.lorem.sentence(30, 150);
    const image = faker.image.imageUrl(1000,1000);

    const post = new Post()
    post.imageUrl = image
    post.text = text
    post.user = factory(User)() as any
    return post
  })