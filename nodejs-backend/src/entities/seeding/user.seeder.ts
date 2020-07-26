import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../user.entity";

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, _connection: Connection): Promise<any> {
      await factory(User)().createMany(20)
    }
  }