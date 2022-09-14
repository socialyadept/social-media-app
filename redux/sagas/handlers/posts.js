import { call, put } from 'redux-saga/effects';

import { Creators } from '../../actions';
import { requestGetPosts } from '../../requests/posts';

export function* handleGetPosts() {
  try {
    const response = yield call(requestGetPosts);
    const { data } = response;

    yield put(Creators.setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
