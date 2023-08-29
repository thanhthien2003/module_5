import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from './Reduce';
import postSaga from '../saga/SagaConnect';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(  postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(postSaga);

export default store;