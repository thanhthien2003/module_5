import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import EditService from './components/EditService';
import ListService from './components/ListService';
import './css/editService.css'
import './css/createService.css'
import CreateService from './components/CreateService';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/service.css'
import './css/createCustomer.css'
import './css/editCustomer.css'
import { ListCustomer } from './components/ListCustomer';
import { CreateCustomer } from './components/CreateCustomer';
import { EditCustomer } from './components/EditCustomer';
import CreateContact from './components/CreateContact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CreateContact />
);

