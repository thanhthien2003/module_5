import { put, takeEvery } from "redux-saga/effects";

import {
    GET_POSTS_FETCH,
    GET_POSTS_SUCCESS,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    DELETE_POST,
    UPDATE_POST,
    DELETE_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
} from "./redux/Action";
import axios from "axios";

function* getPostSuccess() {
    try {
        const response = yield axios.get("  http://localhost:8080/posts");
        yield put({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } });
    } catch (err) {
        console.log("error - getPosts: ", err);
    }
}




function* postSaga() {
    yield takeEvery(GET_POSTS_SUCCESS, getPostSuccess);
    yield takeEvery(CREATE_POST, workCreatePost);
}

export default postSaga;