import UserActionTypes from "./user.types";
import { User } from "./user.models";

const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action: {type: UserActionTypes, payload: User}) => {
    switch (action.type) {
        case UserActionTypes.SetCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}