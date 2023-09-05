import { ErrorMessage, Form, Formik, Field } from "formik"
import *as Yup from "yup";
import { createStudent } from "../service/StudentService";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from 'react'
import { displayClass } from "../service/ClassService";
function CreateStudent() {
    const navigate = useNavigate();
    useEffect(() => {
        getListClass();
    }, []);
    const addStudent = async (student) => {
        student.classes = JSON.parse(student.classes);
        await createStudent(student);
        navigate('/')
    }
    const [classesList, setClassesList] = useState([]);

    const getListClass = async () => {
        const result = await displayClass();
        console.log(result);
        setClassesList(result);
    }


    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    classes: {}
                }}

                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("khong de trong")
                    }
                )}
                onSubmit={async (values) => {
                    await addStudent(values)

                }}
            >

                <Form>
                    <Field className='form-control' name="name" type="text" />
                    <ErrorMessage component='span' name="name" />
                    <Field className='form-control' name="classes" as='select'>
                        <option value={{}}>Choose one</option>
                        {classesList.map((c) => (
                            <option key={c.id} value={JSON.stringify(c)}>{c.nameClass}</option>
                        )
                        )}
                    </Field>
                    <ErrorMessage component='span' name="class" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default CreateStudent;