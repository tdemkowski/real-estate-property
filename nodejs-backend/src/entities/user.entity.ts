import { Entity, Column, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Post } from './post.entity'

@Entity()
export class User extends BaseEntity {
    @Column()
    username: string

    @Column()
    age: number

    @Column()
    profilePictureURL: string

    @OneToMany((_type) => Post, (post) => post.user)
    posts: Post[]
}
