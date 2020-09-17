export interface IUser {
    email: string
    userId: string
    exp: number
    username?: string
    fullName?: string
    imageUrl?: string
}

export interface UserState {
    currentUser: IUser | null
}
