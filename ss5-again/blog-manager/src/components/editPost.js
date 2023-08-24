import { useNavigate, useParams } from "react-router-dom";
import { list } from "../data/data";
import React, { useEffect, useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"


function EditPost(){
    const navigate = useNavigate();
    const param = useParams();
    const [listPost,setListPost] = useState(list);
    const [getPost,setGetPost] =useState(null);
    
    useEffect(() => {
        for (let i = 0; i < listPost.length; i++) {
            if (listPost[i].id == param.id) {
                setGetPost(listPost[i]);
                break;
            }
        }
    },[param])

    if (getPost==null) {
        return null;
    }

    console.log(getPost);
    return(
        <>
        <Formik 
            initialValues={getPost}

                    validationSchema={Yup.object({
                        title: Yup.string().required("Name is not empty") ,
                        slug: Yup.string().required("Name is not empty"),
                        category: Yup.string().required("Name is not empty"),
                        content: Yup.string().required("Name is not empty"),
                        author: Yup.string().required("Name is not empty"),
                        authorEmail: Yup.string().required("Name is not empty").email("Your email not exist")
                    })}
                    onSubmit = {(value) => {
                        for (let i = 0; i < listPost.length; i++) {
                            if (listPost[i].id === value.id) {
                                listPost[i] = {
                                    "id": value.id,
                                    "title": value.title,
                                    "slug": value.title,
                                    "category": value.category,
                                    "content": value.content,
                                    "author": value.author,
                                    "authorEmail": value.authorEmail
                                };
                            }
                        }
                            navigate("/");
                    }}
                    >
                    {(
                            <Form>
                            Title:  <Field type='text'  id='title' name='title'/>
                            <ErrorMessage name="title" component='span'/>
                            Slug:  <Field type='text' className='form-control' id='slug' name='slug'/>
                            <ErrorMessage name="slug" component='span' />
                            Category:  <Field type='text' id='category' name='category'/>
                            <ErrorMessage name="category" component='span' />
                            Content:  <Field type='text'  id='content' name='content'/>
                            <ErrorMessage name="content" component='span' />
                            Author:  <Field type='text' id='author' name='author'/>
                            <ErrorMessage name="author" component='span' />
                            Author-Email:  <Field type='email'  id='authorEmail' name='authorEmail'/>
                            <ErrorMessage name="authorEmail" component='span' />

                            <button type='submit' className='btn btn-primary'>Submit</button>  
                            </Form>
                    )}
            </Formik>
        </>
    )
}
export default EditPost;