import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../redux/Action';

const GET_USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const DELETE_USER_API_URL = 'https://jsonplaceholder.typicode.com/users/';


function* getUsersSaga() {
  try {
    const response = yield call(axios.get, GET_USERS_API_URL);
    const users = response.data;

   

    yield put(actionTypes.getUsersSuccess(users));
  } catch (error) {
  }
}


function* userSaga() {
  
  yield takeLatest(actionTypes.GET_USERS, getUsersSaga);
}

export default userSaga;