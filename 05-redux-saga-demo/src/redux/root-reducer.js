import { combineReducers } from 'redux';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
	photo: appReducer
});

export default rootReducer;
