import appActionTypes from './app.type';

export const fetchActionStart = () => {
	return {
		type: appActionTypes.FETCH_IMAGE_START
	};
};

export const fetchActionSuccess = (images) => {
	return {
		type: appActionTypes.FETCH_IMAGE_SUCCESS,
		payload: images
	};
};

export const fetchActionFailure = (error) => {
	return {
		type: appActionTypes.FETCH_IMAGE_FAILURE,
		payload: error
	};
};
