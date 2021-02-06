import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Author } from 'entities/Author';

@Entity({ name: 'book' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  authorId: number;
  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: 'authorId' })
  author: Author;
}
