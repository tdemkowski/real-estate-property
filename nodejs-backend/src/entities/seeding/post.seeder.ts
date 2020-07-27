import { Post } from "../post.entity";
import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";

export default class CreatePosts implements Seeder {
    public async run(factory: Factory, _connection: Connection): Promise<any> {
      await factory(Post)()
    }
  }