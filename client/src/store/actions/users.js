import Service from '../../services/authService';
import { SET_USER, SET_ERROR } from '../actionTypes'; 
import { getTasks, getTaskDates } from './tasks';
import { getEvents } from './events';

function handleUser(user) {
  return {
    type: SET_USER,
    user
  }
}

function handleError(error) {
  return {
    type: SET_ERROR,
    error
  }
}

export function register(user) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Service.register({user: user})
      .then(data => {
        if (data.user) {
          Service.saveToken(data.token);
          dispatch(handleUser(data.user));
          resolve();
        } else {
          dispatch(handleError(data.errors))
        }      
      })
      .catch(err => dispatch(handleError({errors: {message: "Some error"}})))
    })
  }
}

function fetchCalls(id) {
  return dispatch => {
    dispatch(getTasks(id))
    dispatch(getTaskDates(id));
    dispatch(getEvents(id));
  }
}

export function login(user) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Service.login({session: user})
      .then(data => {
        if(data.user) {
          Service.saveToken(data.token);
          dispatch(handleUser(data.user));
          resolve(data);
        } else {
          dispatch(handleError(data.errors))
        }
      })
      .catch(err => dispatch(handleError({errors: {message: "Some error"}})))
    })
    .then(data => {
      dispatch(fetchCalls(data.user.id))
    })
  }
}

export function checkUser() {
  return dispatch => {
    return new Promise((resolve, reject) => {     
      Service.checkUser()
      .then(data => {
        dispatch(handleUser(data));
        resolve(data);
      })
      .catch(err => dispatch(handleUser(false)))
    })
    .then(data => {
      dispatch(fetchCalls(data.id));
    })
  }
}

export function logout() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Service.destroyToken();
      dispatch(handleUser(false));
      resolve();
    })
  }
}

export function removeError() {
  return dispatch => {
    dispatch(handleError(false));
  }
}
