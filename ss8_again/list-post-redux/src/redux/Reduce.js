import * as actionTypes from './Action';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        
      };
    default:
      return state;
  }
};

export default userReducer;