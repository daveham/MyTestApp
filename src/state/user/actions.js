import { createActions } from 'redux-actions';

import { identity } from '../utilities';

export const { requestUser, receiveUser } = createActions({
  REQUEST_USER: identity,
  RECEIVE_USER: identity,
});
