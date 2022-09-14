import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types } from '../actions';

const INITIAL_STATE = Immutable({
  isFetched: false,
  data: undefined,
});

// const resetPost = () => ({
//   type: Types.RESET_STATE,
// });

const setPostCallback = (state = INITIAL_STATE, action) => {
  const { data } = action;

  return state.merge({ isFetched: true, data });
};

const getPostCallback = (state = INITIAL_STATE) => state;

// const resetPostCallback = (state = INITIAL_STATE) => state;

const HANDLERS = {
  [Types.GET_POST]: getPostCallback,
  [Types.SET_POST]: setPostCallback,
  // [Types.RESET_STATE]: resetPostCallback,
};

export const selectPostData = state => state.post.data;
export const selectPostIsFetched = state => state.post.isFetched;

export default createReducer(INITIAL_STATE, HANDLERS);

// export { resetPost };
