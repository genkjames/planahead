import Service from '../../services/authService';
import { SET_USER, GET_USER, SET_ERROR } from '../actionTypes';

function handleRegister(user) {
  return {
    type: SET_USER,
    user
  }
}

function handleLogin(user) {
  return {
    type: GET_USER,
    user
  }
}

function handleError(error) {
  return {
    type: SET_ERROR,
    error
  }
}

export function registering(user) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Service.register({user: user})
      .then(data => {
        if (data.user) {
          Service.saveToken(data.token);
          dispatch(handleRegister(data.user));
          resolve();
        } else {
          dispatch(handleError(data.errors))
        }      
      })
      .catch(err => dispatch(handleError({errors: {message: "Some error"}})))
    })
  }
}

export function logging(user) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Service.login({session: user})
      .then(data => {
        if(data.user) {
          Service.saveToken(data.token)
          dispatch(handleLogin(data.user));
          resolve();
        } else {
          dispatch(handleError(data.errors))
        }
      })
      .catch(err => dispatch(handleError({errors: {message: "Some error"}})))
    })
  }
}