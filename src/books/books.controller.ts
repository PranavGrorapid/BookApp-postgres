import { Controller,Post,Body,Get,Param,Put,Delete } from '@nestjs/common';
import { Book } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { updateBookDto } from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  async createBook(@Body() body: CreateBookDto): Promise<Book> {

    const user = {
      id: 'f785c4a3-0505-42e2-9714-34b36713d07f',
      email: 'pranavat9948@gmail.com',
      password: '123456',
    };

    return this.bookService.createBook(body,user);
  }

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findBookById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() body
  ): Promise<Book> {
    return this.bookService.updateBookById(id, body);
  }

  @Delete(':id')
  async removeBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBookById(id)
  }
}
