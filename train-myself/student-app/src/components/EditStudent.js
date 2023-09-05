import {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router';
import { editStudent, findById } from '../service/StudentService';
import {ErrorMessage,Formik,Form,Field} from "formik";
import *as Yup from "yup"
function EditStudent() {
    const [student,setStudent] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    
    const getStudentById = async () => {
        const result = await findById(param.id)
           setStudent(result);
           console.log(param);

    }   

    const handleEdit = async (student) => {
        await editStudent(param.id,student);
        navigate('/');
    }

    useEffect(() => {
        getStudentById();
    },[param])

    if(student == null) {
        return null;
    }
    return (
        <>
        <Formik
        initialValues={student}

        validationSchema={Yup.object({
            name: Yup.string().required("khong de trong"),
            classes: Yup.string().required("khong duoc de trong")
        })}
        
        onSubmit={async (values) => {
                await handleEdit(values);
        }}
        >
            <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
    <Field name='name' className="form-control" />
    <ErrorMessage component="span" name='name' />
    <Field name='classes' className="form-control" />
    <ErrorMessage component="span" name='classes' />
    <button type='submit' className='btn btn-primary'>Submit</button>
</Form>
        </Formik>
        </>
    )
}
export default EditStudent;