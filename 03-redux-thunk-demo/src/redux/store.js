import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from './rootReducer';

const middleWares = [ logger, thunk ];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
