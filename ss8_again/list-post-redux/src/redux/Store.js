import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './Reduce';
import userSaga from '../saga/SagaConnect';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;