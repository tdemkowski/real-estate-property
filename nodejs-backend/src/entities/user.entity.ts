import { Entity, Column, OneToMany, BeforeInsert } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Post } from './post.entity'
import * as bcrypt from 'bcrypt'

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

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password || this.password, salt)
    }
}
