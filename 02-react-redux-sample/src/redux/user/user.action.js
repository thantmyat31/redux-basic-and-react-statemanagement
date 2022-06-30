import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './user.type';

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

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(result => dispatch(fetchUserSuccess(result)))
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchUserFailure(errorMsg));
			});
	};
};
