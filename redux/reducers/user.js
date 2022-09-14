import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const INITIAL_STATE = Immutable({
  data: {},
  isFetched: false,
});

const setUserCallback = (state = INITIAL_STATE, action) => {
  const { data } = action;

  return state.merge({
    isFetched: true,
    data,
  });
};

const getUserCallback = (state = INITIAL_STATE) => state;

const HANDLERS = {
  [Types.GET_USER]: getUserCallback,
  [Types.SET_USER]: setUserCallback,
};

export const selectUserData = state => state.user.data;
export const selectUserIsFetched = state => state.user.isFetched;

export default createReducer(INITIAL_STATE, HANDLERS);
