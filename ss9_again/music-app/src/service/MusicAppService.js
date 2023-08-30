import axios from "axios";

export const getAll = async () => {
    const result = await axios.get("http://localhost:8080/music");
    return result.data
}

export const createMusic = async (music) => {
    const result = await axios.post("http://localhost:8080/music",music);
}
 
export const deleteMusic = async (id) => {
    const result = await axios.delete(`http://localhost:8080/music/${id}`);
 
}

 export const detailMusic = async (id) => {
    const result = await axios.get(`http://localhost:8080/music/${id}`);
    return result.data
 }

export const editMusic = async (id,music) => {
    const result = await axios.put(`http://localhost:8080/music/${id}`,music);
    return result.data
}