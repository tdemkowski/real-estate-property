import UserActionTypes from './user.types'
import { IUser } from './user.models'
import BaseAction from '../base-action.model'

export const setCurrentUser = (user: IUser): BaseAction<UserActionTypes, IUser> => ({
    type: UserActionTypes.SetCurrentUser,
    payload: user,
})

export const deleteCurrentUser = (): BaseAction<UserActionTypes, null> => ({
    type: UserActionTypes.DeleteCurrentUser,
    payload: null,
})
