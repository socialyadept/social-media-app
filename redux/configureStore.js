import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
