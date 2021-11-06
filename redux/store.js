import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import helloReducer from './reducers';

const rootReducer = combineReducers({
  helloReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));