import { combineReducers } from 'redux';
import cakeReducer from './cake/cake.reducer';
import iceCreamReducer from './ice-cream/ice-cream.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
	user: userReducer
});

export default rootReducer;
