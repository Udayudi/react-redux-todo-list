import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import {logger} from 'redux-logger'

export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(logger)
    )
}