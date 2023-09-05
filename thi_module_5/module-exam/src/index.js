import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowListProduct from './components/ShowListProduct';
import EditProduct from './components/EditProduct';
import CreateProduct from './components/CreateProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ShowListProduct />} />
    {/* <Route path='/edit/:id' element={<EditProduct />} /> */}
    <Route path='/create' element={<CreateProduct />} />
  </Routes>
  </BrowserRouter>
);

