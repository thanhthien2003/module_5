import { useNavigate, useParams } from "react-router-dom";
import { list } from "../data/data";
import React, { useEffect, useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"


export default function EditPost(){
    const navigate = useNavigate();
    const param = useParams();
    // const [listPost,setListPost] = useState(list);
    const [getPost,setGetPost] =useState({});
    
    useEffect(() => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == param.id) {
                setGetPost(list[i]);
                break;
            }
        }
    },[getPost])

  

    console.log(getPost);
    return(
        <>
        {
           getPost !== null ? 
            <Formik 
            initialValues={getPost}

                    validationSchema={Yup.object({
                        title: Yup.string().required("Name is not empty") ,
                        slug: Yup.string().required("Slug is not empty"),
                        category: Yup.string().required("Category is not empty"),
                        content: Yup.string().required("Content is not empty"),
                        author: Yup.string().required("Author is not empty"),
                        authorEmail: Yup.string().required("Author-email is not empty").email("Email is not in the correct format")
                    })}
                    onSubmit = {(value) => {
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id === value.id) {
                                list[i] = {
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
            </Formik> : ""
        }
        
        </>
    )
}