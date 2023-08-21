import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateBoardDto } from "./dto/create-board.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { Board } from "../entity/board.entity";

@Injectable()
export class BoardService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      @InjectRepository(Board)
      private boardRepository: Repository<Board>
    ) {
    }

    private boards = [
        {
            id: 1,
            name: 'Dooodly',
            contents: 'Content 1'
        },
        {
            id: 2,
            name: 'Alice',
            contents: 'Content 2'
        },
        {
            id: 3,
            name: 'Bob',
            contents: 'Content 3'
        },
    ]

    async findAll() {
        return this.boardRepository.find();
    }

    async find(id: number) {
        const board = await this.boardRepository.findOneBy({id});

        if(!board) throw new HttpException('NotFound', HttpStatus.NOT_FOUND);

        return board;
    }

    create(data: CreateBoardDto) {
        const newBoard = { id: this.getNextId(), ...data };
        this.boards.push(newBoard);
        return newBoard;
    }

    update(id: number, data) {
        const index = this.getBoardId(id);
        if (index > -1) {   // 존재 한다면
            this.boards[index] = {
                ...this.boards[index],
                ...data
            };
        }

        return null;
    }

    delete(id: number) {
        const index = this.getBoardId(id);
        if (index > -1) {
            return this.boards[index];
        }

        return null;
    }

    getBoardId(id: number) {
        return this.boards.findIndex((board) => board.id === id);
    }

    getNextId() {
       return this.boards.sort((a,b) => (b.id - a.id))[0].id + 1;
    }
}
