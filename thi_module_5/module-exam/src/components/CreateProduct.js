import { createProduct } from "../service/ShopService";
import { ErrorMessage, Form, Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router";
import * as Yup from 'yup'
import { getTypeProductList } from "../service/TypeProductService";

function CreateProduct() {
    const navigate = useNavigate();
    const [typeOfProductList, setTypeOfProductList] = useState([]);

    const takeTypeProductList = async () => {
        const result = await getTypeProductList();
        console.log(result);
        setTypeOfProductList(result);
    }
    useEffect(() => {
        takeTypeProductList();
    }, [])

    const handleCreate = async (product) => {
        await createProduct(product); 
    }

    return (
        <>
            <Formik
                initialValues={{
                    nameProduct:'',
                    dayStart:'',
                    amount:'',
                    productType:{}
                }}
                validationSchema={Yup.object({
                    nameProduct: Yup.string().required("You can not require this field!"),
                    dayStart: Yup.string().required("You can not require this field!"),
                    amount: Yup.number().required("You can not require this field!")
                })}

                onSubmit={async (value) => {
                 
                     value={...value,productType:json.parse(value.productType)} ;
                    console.log(value);
                    await handleCreate(value);
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
                        {typeOfProductList.map((p) => (
                            <>
                                <option key={p.idType} value={JSON.stringify(p)}>{p.nameType}</option>
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
export default CreateProduct;