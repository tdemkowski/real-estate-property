export interface User {
    email: string,
    username: string,
    id: string
}

export interface UserState {
    currentUser: User | null
}