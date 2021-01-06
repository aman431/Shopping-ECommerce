import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers/index.js'

const store = createStore(
    rootreducer, 
    applyMiddleware(thunk)
)

export default store;