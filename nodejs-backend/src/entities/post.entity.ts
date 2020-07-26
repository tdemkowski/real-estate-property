import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity()
export class Post extends BaseEntity {
    @ManyToOne(_type => User, user => user.posts)
    user: User;

    @Column()
    imageUrl: string;

    @Column()
    text: string;
}