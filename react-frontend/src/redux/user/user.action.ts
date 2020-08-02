import UserActionTypes from './user.types'
import { User } from './user.models'
import BaseAction from '../base-action.model'

export const setCurrentUser = (user: User): BaseAction<UserActionTypes, User> => ({
    type: UserActionTypes.SetCurrentUser,
    payload: user,
})

export const deleteCurrentUser = () : BaseAction<UserActionTypes, null> => ({
    type: UserActionTypes.DeleteCurrentUser,
    payload: null
})