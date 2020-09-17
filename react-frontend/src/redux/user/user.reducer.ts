import UserActionTypes from './user.types'
import { IUser, UserState } from './user.models'
import BaseAction from '../base-action.model'

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state: UserState = INITIAL_STATE, action: BaseAction<UserActionTypes, IUser>) => {
    switch (action.type) {
        case UserActionTypes.SetCurrentUser:
            return {
                ...state,
                currentUser: action.payload,
            }
        case UserActionTypes.DeleteCurrentUser:
            return {
                ...state,
                currentUser: null,
            }
        default:
            return state
    }
}
