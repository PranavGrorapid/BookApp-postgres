import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';
import { CreateBookDto } from './dtos/create-book.dto';
import { updateBookDto } from './dtos/update-book.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  async createBook(book: CreateBookDto ,user): Promise<Book> {
    const bookObj = await this.repo.create({
      name: book.name,
      price: book.price,
      author: book.author,
      user:user.id
    });

    return this.repo.save(bookObj);
  }

  async findAll(): Promise<Book[]> {
    const allBooks = await this.repo.find({});

    return allBooks;
  }

  async findBookById(id: string): Promise<Book> {
    const bookDetail = await this.repo.findOne({ where: { id } });

    if (!bookDetail) {
      throw new NotFoundException('book not found');
    }

    return bookDetail;
  }

  async updateBookById(id: string, body: Book): Promise<Book> {
    const bookDetail = await this.repo.findOne({ where: { id } });

    if (!bookDetail) {
      throw new NotFoundException('book not found');
    }

    Object.assign(bookDetail, body);

    return this.repo.save(bookDetail);
  }
    
    

    async deleteBookById(id: string) {
    
        const bookDetail = await this.repo.findOne({ where: { id } });

        if (!bookDetail) {
            throw new NotFoundException('book not found')
        }

  

        return this.repo.remove(bookDetail);
      
    }
}
