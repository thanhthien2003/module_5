import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import EditService from './components/editService';
import ListService from './components/listService';
import './css/editService.css'
import './css/createService.css'
import CreateService from './components/createService';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/service.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ListService />
);

