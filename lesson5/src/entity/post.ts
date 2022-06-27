import {
    Column, Entity, ManyToOne, JoinColumn,
} from 'typeorm';
// eslint-disable-next-line import/no-unresolved
import { CommonFields } from './commonFields';

// eslint-disable-next-line import/no-unresolved
import { User } from './user';

export interface IPost {
    title: string;
    text: string;
    userId: number;
}

@Entity('Posts', { database: 'okten' })
export class Post extends CommonFields implements IPost {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        userId: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;
}
