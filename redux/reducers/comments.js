import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types } from '../actions';

const INITIAL_STATE = Immutable({
  isFetched: false,
  data: undefined,
});

const setCommentsCallback = (state = INITIAL_STATE, action) => {
  const { data } = action;

  return state.merge({ isFetched: true, data });
};

const getCommentsCallback = (state = INITIAL_STATE) => state;

const HANDLERS = {
  [Types.GET_COMMENTS]: getCommentsCallback,
  [Types.SET_COMMENTS]: setCommentsCallback,
};

export const selectCommentsData = state => state.comments.data;
export const selectCommentsIsFetched = state => state.comments.isFetched;

export default createReducer(INITIAL_STATE, HANDLERS);
