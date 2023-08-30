import { Formik,ErrorMessage,Field,Form } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as Yup from "yup";
import { detailMusic, editMusic } from "../service/MusicAppService";

function EditMusic(){
    const [music,setMusic] = useState(null);
    const param = useParams();
    const findMusicById = async () => {
        const result = await detailMusic(param.id);
        setMusic(result);
    }
    useEffect(() => {
        findMusicById();
    },[])
    const editMusicToList = async (id,music) => {
        const result = await editMusic(id,music);
    }

    if(music == null){
        return null;
    }

    return(
        <>
                <Formik 
        initialValues={music}
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
            await editMusicToList(param.id,values);
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

export default EditMusic;

