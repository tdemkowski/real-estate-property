import UserActionTypes from "./user.types";
import { User } from "./user.models";

export const userReducer = (state: {currentUser: User}, action: {type: UserActionTypes, payload: User}) => {
    switch (action.type) {
        case UserActionTypes.SetCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            }
    }
}