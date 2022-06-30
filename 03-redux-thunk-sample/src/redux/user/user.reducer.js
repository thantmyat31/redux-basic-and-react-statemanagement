import userActionTypes from './user.type';
import { selectUserSearch } from './user.ultils';

const initialState = {
	loading: false,
	users: [],
	userFiltered: [],
	error: '',
	query: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userActionTypes.FETCH_USER_START:
			return {
				...state,
				loading: true
			};

		case userActionTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				users: action.payload,
				loading: false
			};

		case userActionTypes.FETCH_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		case userActionTypes.USER_SEARCHING:
			return {
				...state,
				loading: false,
				userFiltered: action.payload.length ? selectUserSearch(state.users, action.payload) : state.users,
				query: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
