import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './user.type';
import axios from 'axios';

export const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST
	};
};

const fetchUserSuccess = (users) => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: users
	};
};

const fetchUserFailure = (error) => {
	return {
		type: FETCH_USER_FAILURE,
		payload: error
	};
};

export const fetchUser = () => {
	return (dispatch) => {
		dispatch(fetchUserRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const users = response.data;
				dispatch(fetchUserSuccess(users));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUserFailure(errorMsg));
			});
	};
};
