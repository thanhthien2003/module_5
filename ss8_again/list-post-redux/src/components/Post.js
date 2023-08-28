import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  getPostSuccess
} from "./redux/Action"




const PostList = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.getPostSuccess);

  useEffect(() => {
    dispatch(getPostSuccess());
  }, [dispatch]);


  return (
    <>
      <div className=" container my-2">
        <div
          className=" btn btn-outline-info mb-3">

        </div>
        <table className="post-list table table-striped ">
          <thead>
            <tr>
              <td>ID</td>
              <td>TITLE</td>
              <td>SLUG</td>
              <td>CATEGORY</td>
              <td>THUMBNAIL URL</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.slug}</td>
                <td>{post.category}</td>
                <td>{post.url}</td>
              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </>
  );
}

export default PostList;