import axios from "axios"

export const display = async () => {
    try {
        return (await axios.get("http://localhost:8080/students")).data
    } catch (error) {
        return error
    }
}

export const createStudent = async (student) => {
    try {
         await axios.post("http://localhost:8080/students",student);
    } catch (error) {
        return error
    }
}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/students/${id}`)
    } catch (error) {
        return error;
    }
} 
export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/students/${id}`)).data
    } catch (error) {
        return error;
    }
}
export const editStudent = async (id,student) => {
    try {
       return (await axios.put(`http://localhost:8080/students/${id}`,student)).data
    } catch (error) {
        return error
    }
}