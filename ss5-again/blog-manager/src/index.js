import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListPost from './components/listPost';
import CreatePost from './components/createPost';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
