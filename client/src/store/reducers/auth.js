import { SET_USER, SET_ERROR } from '../actionTypes';

const initialState = {
  user: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}