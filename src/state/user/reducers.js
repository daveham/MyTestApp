import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { requestUser } from './actions';

const INITIAL_STATE = '';

export const userId = handleActions(
  {
    [requestUser]: (state, { payload, meta }) => {
      return payload;
    },
  },
  INITIAL_STATE,
);

export default combineReducers({ userId });
