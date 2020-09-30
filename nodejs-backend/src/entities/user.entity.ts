import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Post } from './post.entity'
import { Comment } from './comment.entity'
import * as bcrypt from 'bcrypt'

@Entity()
export class User extends BaseEntity {
    @Column()
    email: string

    @Column()
    fullName: string

    @Column()
    username: string

    @Column({ select: false })
    password: string

    @Column({ nullable: true })
    age: number

    @Column({ nullable: true })
    profilePictureURL: string

    @OneToMany((_type) => Post, (post) => post.user)
    posts: Post[]

    @OneToMany((_type) => Comment, (comment) => comment.user)
    comments: Comment[]

    @BeforeInsert()
    async setPassword(_password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
    }
}
