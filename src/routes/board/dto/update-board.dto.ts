import { IsNotEmpty } from "class-validator";
import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { CreateBoardDto } from "./create-board.dto";

export class UpdateBoardDto {

  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  contents: string;
}

// CreateBoardDto 의 모든 필드를 옵셔널로 사용하기 (@NotEmpty annotation 이 있다면 주의해야함)
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

// CreateBoardDto 의 몇가지 필드를 선택해서 사용하기
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {}

// CreateBoardDto 의 몇가지 필드만 빼고 선택해서 사용하기
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {}