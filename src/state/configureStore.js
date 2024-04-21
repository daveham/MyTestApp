import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

let sagaMiddleware;

export function runSagas(sagas) {
  sagaMiddleware?.run(sagas);
}

export default function createStore(_initialState) {
  sagaMiddleware = createSagaMiddleware();

  return legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
}
