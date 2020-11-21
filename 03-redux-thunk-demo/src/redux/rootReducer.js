import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
	users: userReducer
});

export default rootReducer;
