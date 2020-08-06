import { Entity, Column, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { User } from './user.entity'
import { Comment } from './comment.entity'

@Entity()
export class Post extends BaseEntity {
    @ManyToOne((_type) => User, (user) => user.posts)
    user: User

    @OneToMany((_type) => Post, (post) => post.comments)
    comments: Comment[]

    @Column()
    imageUrl: string

    @Column()
    text: string
}
