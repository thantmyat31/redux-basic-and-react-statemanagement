import userActionTypes from './user.type';
import axios from 'axios';

export const userFetchStart = () => {
	return {
		type: userActionTypes.FETCH_USER_START
	};
};

export const userFetchSuccess = (users) => {
	return {
		type: userActionTypes.FETCH_USER_SUCCESS,
		payload: users
	};
};

export const userFetchFailure = (error) => {
	return {
		type: userActionTypes.FETCH_USER_FAILURE,
		payload: error
	};
};

export const userSearch = (query) => {
	return {
		type: userActionTypes.USER_SEARCHING,
		payload: query
	};
};

export const fetchUser = () => {
	return (dispatch) => {
		dispatch(userFetchStart());
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				dispatch(userFetchSuccess(response.data));
			})
			.catch((error) => {
				dispatch(userFetchFailure(error.message));
			});
	};
};
