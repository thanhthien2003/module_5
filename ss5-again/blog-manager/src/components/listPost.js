import React, { useState } from "react";
import { list } from "../data/data";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FidgetSpinner} from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup"

function ListPost() {
    // const [id, setId] = useState(0);
    // const [title, setTitle] = useState("");
    // const [category, setCategory] = useState("");
    // const [content, setContent] = useState("");
    // const [slug,setSlug] = useState("");
    // const [author,setAuthor] = useState("");
    // const [authorEmail,setAuthorEmail] = useState("");
    const [listPost,setListPost] = useState(list);

    return (
        <>
        <Link to="/createPost">Go to add</Link>
        <table className="post-list table table-striped ">
                <tr>
                    <td>STT</td>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>CONTENT</td>
                    <td>SLUG</td>
                    <td>AUTHOR</td>
                    <td>AUTHOR-EMAIL</td>
                    <td>ACTIONS</td>
                </tr>
                {listPost.map((post, index) => {
                    return (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.content}</td>
                            <td>{post.slug}</td>
                            <td>{post.author}</td>
                            <td>{post.authorEmail}</td>
                            <td>
                                <Link  to="/editPost/?{post.id}">Edit</Link>
                                <button className='delete-post btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}       


export default ListPost;