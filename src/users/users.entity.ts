import { Book } from 'src/books/books.entity';
import { Column, PrimaryGeneratedColumn, Entity,OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
 email: string;

  @Column()
    password: string;
    
    @OneToMany(() => Book, (book) => book.name)
      books:Book[]


}
