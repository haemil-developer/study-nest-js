import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../../entity/user.entity";

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    const repository = dataSource.getRepository(User);

    await repository.insert([
      {
        username: 'board user',
        name: 'alice',
        password: '1234qwer'
      }
    ]);
  }
}