import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

export default function createStore(_initialState) {
  const sagaMiddleware = createSagaMiddleware();

  return legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
}
