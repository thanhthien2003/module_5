import { listS } from '../data/data.js'
import React from 'react';
import { useState } from 'react';


function Create() {
    const [list,setList] = useState(listS);
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const handleInputName = (event) => {
        setName(event);
    }
    const handleInputClassName = (event) => {
        setClassName(event);
    }
    const createStudent = () => {
        const newStudent = {
            name: name,
            className: className
        }
        const newList = [...list, newStudent];
        setList(newList);
        setName('');
        setClassName('');
    }

    return (
        <>
        NAME:  <input value={name} onChange={(event) => handleInputName(event.target.value)}/>
        <br></br>
        CLASS: <input value={className} onChange={(event) => handleInputClassName(event.target.value)}/>
        <br></br>
        <button onClick={() => createStudent()}>Add</button>
        </>
    )
}
export default Create;