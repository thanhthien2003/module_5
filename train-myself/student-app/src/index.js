import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DisplayList from './components/DisplayList';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DisplayList />} />
    <Route path='/create' element={<CreateStudent />}/>
    <Route path='/edit/:id' element={<EditStudent />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

