import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;
  // repassord: string; front 처리 가능

  @MinLength(2)
  @IsNotEmpty()
  name:string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('KR')  // 국가코드 넣으면 각 나라의 전화번호 포맷으로 세팅
  phoneNumber: string;
}