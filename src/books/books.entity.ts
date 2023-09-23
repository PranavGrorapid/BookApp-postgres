import { User } from 'src/users/users.entity';
import { Column, PrimaryGeneratedColumn, Entity,ManyToOne } from 'typeorm'


@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    author: string;

    @ManyToOne(() => User, (user) => user.books)
    user:User
  
    
}