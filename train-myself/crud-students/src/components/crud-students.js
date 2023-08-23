import React from 'react';
import { useState } from 'react';

function ListStudents() {
    const [list,setList] = useState([
        {
            name: "thien",
            className: "c033G1"
        },
        {
            name:"Hanh",
            className: "c012G0"
        }
    ]);
    const [name,setName] = useState('');
    const [className,setClassName] = useState('');
    const handleInputName = (event) => {
            setName(event);
    }
    const handleInputClassName = (event) => {
        setClassName(event);
    }
    const createStudent = () => {
            const newStudent = {
                name:name,
                className:className
            }
            const newList = [...list,newStudent];
            setList(newList);
            setName('');
            setClassName('');
    }

    const deleteStudent = (value) => {
            const newList = [...list];
            for (let i = 0; i < newList.length; i++) {
                if(newList[i].name===value){
                    newList.splice(i,1);
                    setList(newList);
                    break;
                }
            }
    }

    const getStudent = (obj) => {
            setName(obj.name);
            setClassName(obj.className);
    }
    const editStudent = () => {
        const newList = [...list];
        for (let i = 0; i < newList.length; i++) {
            if(newList[i].name===name){
                newList[i].className = className;
                setList(newList);
                setName('');
                setClassName('');
                console.log(newList);
                break;
            }
        }
    }

    return(
        <>
        <h1>List Students</h1>
        NAME:  <input value={name} onChange={(event) => handleInputName(event.target.value)}/>
        <br></br>
        CLASS: <input value={className} onChange={(event) => handleInputClassName(event.target.value)}/>
        <br></br>
        <button onClick={() => createStudent()}>Add</button>
        <button onClick={() => editStudent()}>Edit</button>
        <table>
            <header>
                <th>STT</th>
                <th>Name</th>
                <th>Class</th>
                <th>Edit</th>
                <th>Delete</th>
            </header>
            <body>
                {list.map((student,index) => {
                    return(
                        <>
                        <tr key={index}>
                            <tr>{index+1}</tr>
                            <tr>{student.name}</tr>
                            <tr>{student.className}</tr>
                            <tr>
                                <button onClick={() => deleteStudent(student.name)}> Delete </button>
                            </tr>
                            <tr>
                                <button onClick={() => getStudent(student)}> Edit </button>
                            </tr>
                        </tr>
                        </>
                    )
                })
                }
            </body>
        </table>
        </>
    )
}
export default ListStudents;