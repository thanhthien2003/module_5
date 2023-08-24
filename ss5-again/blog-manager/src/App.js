import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListPost from './components/listPost';
import CreatePost from './components/createPost';
import EditPost from './components/editPost';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPost />} />
        <Route path='/createPost' element={<CreatePost />} />
        <Route path='/editPost/:id' element={<EditPost />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
