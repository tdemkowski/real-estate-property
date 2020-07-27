import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { UserState } from './user/user.models'

export interface StoreState {
    user: UserState
}

const rootReducer = combineReducers<StoreState>({
    user: userReducer,
})

export default rootReducer
