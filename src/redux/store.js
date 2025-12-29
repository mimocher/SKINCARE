import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

export default store;