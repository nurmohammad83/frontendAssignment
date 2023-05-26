import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './todos/reducer';


const store = createStore(reducer)

export default store;