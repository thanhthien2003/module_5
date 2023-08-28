import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListContract from './components/ListContract'
import Home from './components/Home';
import ListService from './components/ListService';
import ListCustomer from './components/ListCustomer';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contract' element={<ListContract />}/>
      <Route path='/service' element={<ListService />}/>
      <Route path='/customer' element={<ListCustomer />}/>
    </Routes>
    </>
  );
}

export default App;
