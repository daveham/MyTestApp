import { createActions } from 'redux-actions';

function identity(value) {
  return value;
}

export const { requestUser, receiveUser } = createActions({
  REQUEST_USER: identity,
  RECEIVE_USER: identity,
});
