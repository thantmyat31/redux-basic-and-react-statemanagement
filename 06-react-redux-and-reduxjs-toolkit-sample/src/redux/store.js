import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post/post.reducer';
import {createLogger} from 'redux-logger';

let middlewares = [];
middlewares.push(createLogger());

const store = configureStore({
    reducer: {
        post: postReducer
    },
    middleware: (middleware) => middleware().concat(...middlewares)
});

export default store;