import React from 'react';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers,deleteUser} from "../redux/Action"

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);


    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);


    const handleDeleteUser = (id) => {
      dispatch(deleteUser(id));
    };

    return (
      <div>
        <h1>User Management</h1>
        <button onClick={() => dispatch(getUsers())}>Get users</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default User;