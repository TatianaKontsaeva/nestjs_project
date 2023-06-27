import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

@Entity()

export class User {
    @ApiProperty({
        minimum: 1
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
        unique: true
    })
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @OneToMany(type => Task, task => task.user)
    users: User[]
}
