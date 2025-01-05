import { IsString, IsEmail, IsNotEmpty, IsNumber, Max } from 'class-validator';

export class CreateUsersDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
