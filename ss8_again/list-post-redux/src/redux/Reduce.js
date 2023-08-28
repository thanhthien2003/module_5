import {
  CREATE_POST_SUCCESS,
  GET_POSTS_SUCCESS
} from "./Action";

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
      case GET_POSTS_SUCCESS:
          return { ...state, posts: action.payload.posts };
      case CREATE_POST_SUCCESS:
          const newPost = action.payload.newPost;
          return { ...state, newPost };
          return state;
  }
};
export default postsReducer;