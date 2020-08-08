import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { User } from './user.entity'
import { Post } from './post.entity'

@Entity()
export class Comment extends BaseEntity {
    @ManyToOne((_type) => User, (user) => user.comments)
    user: User

    @ManyToOne((_type) => Post, (post) => post.comments)
    @Column()
    text: string
}
