import { call, put } from 'redux-saga/effects';

import { Creators } from '../../actions';
import { requestGetUser } from '../../requests/user';

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;

    yield put(Creators.setUser(data));
  } catch (error) {
    console.log(error);
  }
}
