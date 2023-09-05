import { useEffect, useState } from "react";
import { getProductList } from "../service/ShopService";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

function ShowListProduct() {
    const [listClothing, setListClothing] = useState([]);

    const getListProduct = async () => {
        const result = await getProductList();
        setListClothing(result);
    }

    useEffect(() => {
        getListProduct();
    }, [])

    return (
        <>
        <NavLink to={`/create`} type="button" className="btn btn-primary">Create</NavLink>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <th>STT</th>
                        <th>Name Product</th>
                        <th>Day start</th>
                        <th>Amount</th>
                        <th>Type of product</th>
                        {/* <th>Edit</th> */}
                    </thead>
                    <tbody>
                        {listClothing.map((product, index) => (
                            <>
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.nameProduct}</td>
                                    <td>{product.dayStart}</td>
                                    <td>{product.amount}</td>
                                    <td>{product.productType.nameType}</td>
                                    {/* <td>
                                        <NavLink type="button" className="btn btn-primary" to={`/edit/${product.id}`} >Edit</NavLink>
                                    </td> */}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ShowListProduct;