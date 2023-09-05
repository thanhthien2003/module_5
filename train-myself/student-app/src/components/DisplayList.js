import { useState, useEffect } from "react";
import { deleteStudent, display } from "../service/StudentService";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

function DisplayList() {
    const [studentList, setStudentList] = useState([]);
    const getListForService = async () => {
        const result = await display();
        setStudentList(result);
    }

    const handleDelete = async (id) => {
        await deleteStudent(id);
        await getListForService();
    }

    useEffect(() => {
        getListForService();
    }, [])

    return (
        <>
            <a href="/create">Create</a>
            <table className="table table-striped border-primary custom-table">
                <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Classes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.classes.nameClass}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { handleDelete(student.id) }}>Delete</button>
                                <NavLink to={`/edit/${student.id}`} type="button" className='btn btn-primary'>Edit</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default DisplayList;