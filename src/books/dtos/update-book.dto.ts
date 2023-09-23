import { IsNotEmpty, IsString, IsNumber,IsOptional } from 'class-validator';

export class updateBookDto {
  @IsOptional()
  @IsString({ message: 'you cannot provide the ID' })
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  author: string;
}
