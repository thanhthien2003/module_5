import { put, takeEvery } from "redux-saga/effects";


import axios from "axios";
import { CREATE_POST, GET_POSTS_SUCCESS } from "../redux/Action";

function* getPostSuccess() {
    try {
        const response = yield axios.get("http://localhost:8080/post");
        yield put({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } });
    } catch (e) {
    
    }
}
function* createPost(payload) {
    try {
        const result = yield axios.post("http://localhost:8080/post",payload.payload.post)
        yield put({
            type: CREATE_POST,
            payload: {newPost : result.data}
        });
    } catch (e) {
        
    }
}


function* postSaga() {
    yield takeEvery(GET_POSTS_SUCCESS, getPostSuccess);
    yield takeEvery(CREATE_POST,createPost);
}

export default postSaga;