import { SET_USER, SET_ERROR } from '../actionTypes';

const initialState = {
  user: false,
  error: false
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { user: action.user, error: false }
    case SET_ERROR:
      return { user: state.user, error: action.error }
    default:
      return state;
  }
}