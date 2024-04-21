import { createActions } from 'redux-actions';

export const { requestUser } = createActions({
  REQUEST_USER: userId => userId,
});
