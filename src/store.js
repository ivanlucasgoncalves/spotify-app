import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// Importing Articles from reducers
import reducer from './reducers'

const middleware = [thunk, promiseMiddleware]

export default createStore(
	reducer,
	/* preloadedState, */
	composeWithDevTools(applyMiddleware(...middleware, logger))
)
