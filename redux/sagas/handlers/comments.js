import { call, put } from 'redux-saga/effects';

import { Creators } from '../../actions';
import { requestGetPostComments } from '../../requests/comments';

export function* handleGetComments(action) {
  try {
    const response = yield call(requestGetPostComments, action.id);
    const { data } = response;

    yield put(Creators.setComments(data));
  } catch (error) {
    console.log(error);
  }
}
