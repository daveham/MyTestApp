import reducer from '../reducers';
import { requestUser } from '../actions';

describe('user reducers', () => {
  test('returns the initial state', () => {
    const state = reducer({}, { type: 'any' });
    expect(state.userId).toEqual('');
  });

  test('assigns from payload', () => {
    const state = reducer({}, requestUser('my name'));
    expect(state.userId).toEqual('my name');
  });
});
