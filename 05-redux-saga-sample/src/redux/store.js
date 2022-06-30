import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { appSaga } from './app.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ logger, sagaMiddleware ];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(appSaga);

export default store;
