import UserActionTypes from './user.types'
import { User } from './user.models'


export const setCurrentUser = (user: User) => ({
    type: UserActionTypes.SetCurrentUser,
    payload: user
})