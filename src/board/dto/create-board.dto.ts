import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBoardDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: '작성자 아이디',
    required: true,
    example: '1'
  })
  userId: number;

  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요'
  })
  @IsNotEmpty()
  contents: string;
}