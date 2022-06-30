import { takeEvery, call, put } from 'redux-saga/effects';
import appActionTypes from './app.type';
import { fetchActionSuccess, fetchActionFailure } from './app.action';
import { fetchImage } from './app.utils';

function* handleImageStartSaga() {
	try {
		const result = yield call(fetchImage);
		yield put(fetchActionSuccess(result));
	} catch (error) {
		yield put(fetchActionFailure(error));
	}
}

export function* appSaga() {
	yield takeEvery(appActionTypes.FETCH_IMAGE_START, handleImageStartSaga);
}
