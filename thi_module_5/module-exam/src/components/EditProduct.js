import { ErrorMessage, Form, Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as Yup from 'yup'
import { editProduct, findByIdProduct } from "../service/ShopService";
import { getTypeProductList } from "../service/TypeProductService";

function EditProduct() {
    const [product, setProduct] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const [typeOfProductList, setTypeOfProductList] = useState([]);

    const takeTypeProductList = async () => {
        const result = await getTypeProductList();
        setTypeOfProductList(result);
    }
    const getProductById = async () => {
        const result = await findByIdProduct(param.id);
        setProduct(result);
    }

    useEffect(() => {
        getProductById();
        takeTypeProductList();
    }, [])

    const handleEdit = async (productEdit) => {
        await editProduct(param.id,productEdit); 
    }

    if (product == null) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={product}
                validationSchema={Yup.object({
                    nameProduct: Yup.string().required("You can not require this field!").max(100, "Can not over 100 words"),
                    dayStart: Yup.string().required("You can not require this field!"),
                    amount: Yup.number().required("You can not require this field!")
                })}

                onSubmit={async (value) => {
                    value.typeProduct = (JSON.parse(value.typeProduct));
                    await handleEdit(value);
                    navigate('/');
                }}
            >
                <Form>
                    <label htmlFor="name">Name Product: </label>
                    <Field type="text" className="form-control" name="nameProduct" id="name" />
                    <br></br>
                    <ErrorMessage component="span" name="nameProduct" />
                    
                    <br/>
                    <label htmlFor="dayStart"> DayStart: </label>
                    <Field type="text" className="form-control" name="dayStart" id="dayStart" />
                    <br></br>
                    <ErrorMessage component="span" name="dayStart" />
                    <br/>
                    <label htmlFor="amount">Amount : </label>
                    <Field type="number" className="form-control" name="amount" id="amount" />
                    <br></br>
                    <ErrorMessage component="span" name="nameProduct" />
                    <br/>
                    <label htmlFor="typeOfProduct"> Type of product:</label>
                    <Field as="select" className="form-control" name="typeOfProduct">
                        {typeOfProductList.map((product) => (
                            <>
                                <option key={product.id} value={JSON.stringify(product)}>{product.nameTypeProduct}</option>
                            </>
                        ))}
                    </Field>
                    <br></br>
                    <ErrorMessage component="span" name="typeOfProduct" />
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default EditProduct;