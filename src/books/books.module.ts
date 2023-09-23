import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './books.entity';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // Import and configure TypeOrmModule with the Book entity
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
