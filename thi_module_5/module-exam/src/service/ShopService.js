import axios from "axios";

export const getProductList = async () => {
    try {
        const result = await axios.get("http://localhost:8080/api/products");
        return result.data;
    } catch (error) {
        return error;
    }
}
export const findByIdProduct = async (idProduct) => {
    try {
        const result = await axios.get(`http://localhost:8080/listProduct/${idProduct}`);
        return result.data;
    } catch (error) {
        return error;
    }
}

export const editProduct = async (idProduct,product) => {
    try {
        return (await axios.put(`http://localhost:8080/listProduct/${idProduct}`),product);
    } catch (error) {
        return error;
    }
}
export const createProduct = async (product) => {
    try {
        return (await axios.post("http://localhost:8080/api/products",product));
    } catch (error) {
        return error
    }
}