import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../entity/user.entity";
import { Repository } from "typeorm";
import { Board } from "../../entity/board.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
  }

  async getUsers() {
    const qb = this.userRepository.createQueryBuilder();
    qb.addSelect((subQuery) => {
      return subQuery
        .select('count(id)')
        .from(Board, 'Board')
        .where('Board.userId = User.id')
    }, 'User_boardCount');

    return qb.getMany();
  }
}
