import { takeLatest } from 'redux-saga/effects';

import { Types } from '../actions';
import { handleGetUser } from './handlers/user';
import { handleGetPosts } from './handlers/posts';
import { handleGetPost } from './handlers/post';
import { handleGetComments } from './handlers/comments';

export function* watcherSaga() {
  yield takeLatest(Types.GET_USER, handleGetUser);
  yield takeLatest(Types.GET_POSTS, handleGetPosts);
  yield takeLatest(Types.GET_POST, handleGetPost);
  yield takeLatest(Types.GET_COMMENTS, handleGetComments);
}
