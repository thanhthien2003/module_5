export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';


export const getUsers = () => ({ type: GET_USERS });
export const getUsersSuccess = (users) => ({ type: GET_USERS_SUCCESS, payload: users });