import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter1 />
  <Counter2 />
  </>
);
