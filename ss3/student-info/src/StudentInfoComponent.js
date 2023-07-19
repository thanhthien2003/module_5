import React from 'react';
const students = [
  {
    ID: 1,
    Name: 'Maria Anders',
    Age: 18,
    Address: 'Moctezuma'
  },
  {
    ID: 2,
    Name: 'Maria Ozaqua',
    Age: 18,
    Address: 'Japan'
  }
]

class StudentInfoComponent extends React.Component {
  render() {
    return (
    <>
    <h1>Student List</h1>
    <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.ID}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td>{student.Age}</td>
              <td>{student.Address}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </>
    )
  }
}
export default StudentInfoComponent;
