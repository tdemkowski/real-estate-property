export interface User {
    email: string
    userId: string
    exp: number
}

export interface UserState {
    currentUser: User | null
}
