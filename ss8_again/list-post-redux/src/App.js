import { Provider } from 'react-redux';
import './App.css';
import PostList from './components/Post';
import {
  CREATE_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  getPostSuccess
} from "./redux/Action.js"
import store from './redux/Store';

function App() {
  return (
    <>
    <Provider store={store}>
      <PostList />
    </Provider>
    </>
  );
}

export default App;
