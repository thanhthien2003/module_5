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
import './css/createCustomer.css'
import './css/editCustomer.css'
import { ListCustomer } from './components/listCustomer';
import { CreateCustomer } from './components/createCustomer';
import { EditCustomer } from './components/editCustomer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <EditCustomer />
);

