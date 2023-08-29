import {
  CREATE_POST_SUCCESS,
  GET_POSTS_SUCCESS
} from "./Action";

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
      case GET_POSTS_SUCCESS:
            return {posts: action.posts};
      case CREATE_POST_SUCCESS:
          const newPost = action.payload.newPost;
          return { ...state, newPost };
          default:
          return state;
  }
};
export default postsReducer;