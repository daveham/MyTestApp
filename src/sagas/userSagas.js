import { all, put, takeEvery } from 'redux-saga/effects';
import { requestUser, receiveUser } from '../state/user/actions';

export function* userApiSaga({ payload }) {
  yield put(receiveUser(payload));
}

export default function* rootSaga() {
  yield all([takeEvery(requestUser, userApiSaga)]);
}
