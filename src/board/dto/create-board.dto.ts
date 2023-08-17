import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBoardDto {

  @MinLength(2)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty({
    description: '이름',
    required: true,
    example: '차은우'
  })
  name: string;

  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요'
  })
  @IsNotEmpty()
  contents: string;
}