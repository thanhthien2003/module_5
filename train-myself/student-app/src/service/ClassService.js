import axios from "axios";

export const displayClass = async () => {
        return (await axios.get("http://localhost:8080/classes")).data;
}