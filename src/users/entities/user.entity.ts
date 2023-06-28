import { Task } from 'src/tasks/entities/task.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
}
