import { User } from "../user.entity"
import * as Faker from 'faker'
import { define } from 'typeorm-seeding'

define(User, (faker: typeof Faker) => {

    // arrange properties for user rows
    const age = 18 + faker.random.number(30)
    const username = faker.internet.userName();
    const profilePic = faker.image.imageUrl(200,200, "avatar");

    // create the user entity
    const user = new User()

    // insert the user entity
    user.username = username;
    user.age = age
    user.profilePictureURL = profilePic;
    return user
})