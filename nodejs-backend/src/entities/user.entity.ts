import { Entity, Column, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Post } from './post.entity'

@Entity()
export class User extends BaseEntity {
    @Column()
    email: string

    @Column()
    fullName: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({ nullable: true })
    age: number

    @Column({ nullable: true })
    profilePictureURL: string

    @OneToMany((_type) => Post, (post) => post.user)
    posts: Post[]
}
