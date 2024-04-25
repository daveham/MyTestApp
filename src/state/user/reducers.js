import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { receiveUser } from './actions';

const INITIAL_STATE = '';

export const userId = handleActions(
  {
    [receiveUser]: (state, { payload, _meta }) => {
      return payload;
    },
  },
  INITIAL_STATE,
);

export default combineReducers({ userId });
