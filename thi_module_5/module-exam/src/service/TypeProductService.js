import axios from "axios";

export const getTypeProductList = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/productType");
        return result.data;
    } catch (error) {
        return error;
    }
}