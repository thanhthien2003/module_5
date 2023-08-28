export const GET_POSTS_FETCH = "GET_POSTS_FETCH";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const getPostsFetch = () => ({
    type: GET_POSTS_FETCH,
});
export const getPostSuccess = () => ({
    type: GET_POSTS_SUCCESS
});
export const createPost = (newPost) => ({
    type: CREATE_POST,
    payload: { newPost: newPost },
}); 