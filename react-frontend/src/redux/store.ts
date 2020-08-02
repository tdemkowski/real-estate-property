import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const middleware = [logger, thunk]
export const store = createStore(rootReducer, applyMiddleware(...middleware))
