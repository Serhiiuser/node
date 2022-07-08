import { Column, Entity, OneToMany } from 'typeorm';
// eslint-disable-next-line import/no-unresolved
import { CommonFields } from './commonFields';
// eslint-disable-next-line import/no-unresolved
import { Post } from './post';

export interface IUser {
    firstName: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    posts: any[];
}

@Entity('Users', { database: 'okten' })
export class User extends CommonFields implements IUser {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

@Column({
    type: 'varchar',
    width: 255,
    nullable: false,
})
    password: string;

@OneToMany(() => Post, (post) => post.user)
    posts:Post[];
}
