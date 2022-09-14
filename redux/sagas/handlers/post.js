import { call, put } from 'redux-saga/effects';

import { Creators } from '../../actions';
import { requestGetPost } from '../../requests/post';

export function* handleGetPost(action) {
  try {
    const response = yield call(requestGetPost, action.id);
    const { data } = response;

    yield put(Creators.setPost(data));
  } catch (error) {
    console.log(error);
  }
}
