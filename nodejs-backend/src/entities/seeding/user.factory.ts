import { User } from '../user.entity'
import * as Faker from 'faker'
import { define } from 'typeorm-seeding'

define(User, (faker: typeof Faker) => {
    // arrange properties for user rows
    const age = 18 + faker.random.number(30)
    const email = faker.internet.exampleEmail()
    const fullName = faker.name.firstName() + ' ' + faker.name.lastName()
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const profilePic = faker.image.imageUrl(200, 200, 'avatar')

    // create the user entity
    const user = new User()

    // insert the user entity
    user.email = email
    user.fullName = fullName
    user.username = username
    user.password = password
    user.age = age
    user.profilePictureURL = profilePic
    return user
})
