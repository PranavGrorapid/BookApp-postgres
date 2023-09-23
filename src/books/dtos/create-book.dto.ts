import {  IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { User } from 'src/users/users.entity';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString({ message: 'you cannot provide the ID' })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty({message:'You cannot provide userId'})

  user:User
}
