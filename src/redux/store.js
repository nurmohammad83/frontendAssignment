import { createStore } from 'redux'
import todoReducer from './todos/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(todoReducer,composeWithDevTools())