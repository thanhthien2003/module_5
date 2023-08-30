import {Routes,Route} from "react-router-dom"
import DisplayList from './components/DisplayList';
import CreateMusic from './components/CreateMusic';
import EditMusic from "./components/EditMusic";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<DisplayList />} />
      <Route  path='/create' element={<CreateMusic />}/>
      <Route path='/edit/:id' element={<EditMusic />}/>
    </Routes>
    </>
  );
}

export default App;
