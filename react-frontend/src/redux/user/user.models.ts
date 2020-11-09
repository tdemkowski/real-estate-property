export interface IUser {
    email: string
    userId: string
    exp: number
    username: string
    fullName?: string
    profilePictureURL?: string
}

export interface UserState {
    currentUser: IUser | null
}
