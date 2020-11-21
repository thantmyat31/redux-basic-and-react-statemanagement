import appActionTypes from './app.type';

const INITIAL_STATE = {
	loading: false,
	photos: [],
	error: '',
	page: 0
};

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case appActionTypes.FETCH_IMAGE_START:
			return {
				...state,
				loading: true
			};

		case appActionTypes.FETCH_IMAGE_SUCCESS:
			return {
				...state,
				photos: action.payload,
				loading: false,
				page: state.page + 1
			};

		case appActionTypes.FETCH_IMAGE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default appReducer;
