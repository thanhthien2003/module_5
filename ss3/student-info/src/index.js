import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StudentInfoComponent from './StudentInfoComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StudentInfoComponent />
);
// class Display extends React.Component{
//   constructor(){
//     super();
//   }
//   render() {
//     return (
//       <StudentInfoComponent />
//     );
//   }
// }
// ReactDOM.render(<StudentInfoComponent />,document.getElementById('root'));
