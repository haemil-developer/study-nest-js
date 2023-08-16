import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

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

    findAll() {
        return this.boards;
    }

    find(id: number) {
        const index = this.getBoardId(id);
        return this.boards[index];
    }

    create(data) {
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

    getBoardId(id: number) {
        return this.boards.findIndex((board) => board.id === id);
    }

    getNextId() {
       return this.boards.sort((a,b) => (b.id - a.id))[0].id + 1;
    }
}
