import { Formik,ErrorMessage,Form,Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { createMusic } from "../service/MusicAppService";

function CreateMusic(){
    const navigate = useNavigate();
    const addMusic = async (music) => {
        const result = await createMusic(music);
        navigate('/');
    }

    return(
        <>
        <Formik 
        initialValues={
            {
                name: '',
                type:'',
                singer:''
            }
        }
        validationSchema={
            Yup.object(
                {
                    name: Yup.string().required("khong duoc de trong"),
                    type: Yup.string().required("khong duoc de trong"),
                    singer: Yup.string().required("khong duoc de trong")
                }
            )
        }

        onSubmit={ async (values) => {
            await addMusic(values);
        }}
        >
            <Form>
                <label htmlFor="name">Name:</label>
                <Field id="name" className="form-control"  name="name" type="text" />
                <ErrorMessage name="name" component='span'/>
                <label htmlFor="type">Type</label>
                <Field id="type" className="form-control" name="type" type="text" />
                <ErrorMessage name="type" component='span'/>
                <label htmlFor="singer">Singer</label>
                <Field id="singer" className="form-control" name="singer" type="singer" />
                <ErrorMessage name="singer" component='span'/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>
        </>
    )
}
export default CreateMusic;