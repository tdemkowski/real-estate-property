import UserActionTypes from './user.types'
import { User, UserState } from './user.models'
import BaseAction from '../base-action.model'

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state: UserState = INITIAL_STATE, action: BaseAction<UserActionTypes, User>) => {
    switch (action.type) {
        case UserActionTypes.SetCurrentUser:
            return {
                currentUser: action.payload,
            }
        default:
            return state
    }
}
