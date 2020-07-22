import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { User } from './user/user.models'

export interface StoreState {
    user: any;
}
const rootReducer = combineReducers<StoreState>({
    user: userReducer
})

export default rootReducer
