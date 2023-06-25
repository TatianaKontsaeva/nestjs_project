import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    user_id: number;

    @Column({
        type: 'datetime'
    })
    changed_at: Date
}
