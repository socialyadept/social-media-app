import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types } from '../actions';

const INITIAL_STATE = Immutable({
  isFetched: false,
  data: undefined,
});

const setPostsCallback = (state = INITIAL_STATE, action) => {
  const { data } = action;

  return state.merge({ isFetched: true, data });
};

const getPostsCallback = (state = INITIAL_STATE) => state;

const HANDLERS = {
  [Types.GET_POSTS]: getPostsCallback,
  [Types.SET_POSTS]: setPostsCallback,
};

export const selectPostsData = state => state.posts.data;
export const selectPostsIsFetched = state => state.posts.isFetched;

export default createReducer(INITIAL_STATE, HANDLERS);
