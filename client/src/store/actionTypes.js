import Service from '../services/authService';
import Task from '../services/taskService';

// User Actions

export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";

function handleRegister(user) {
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

export function registering(user) {
  return dispatch => {
    Service.register({user: user})
    .then(data => {
      console.log(data);
      if (data.user) {
        Service.saveToken(data.token);
        dispatch(handleRegister(data.user));
      } else {
        dispatch(handleError(data.errors))
      }      
    })
    .catch(err => dispatch(handleError({errors: {message: "Some error"}})))
  }
}


// Tasks Actions

export const GET_TASKS = "GET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

function handleAll(tasks) {
  return {
    type: GET_TASKS,
    tasks
  }
}

function handleSubmit(task) {
  return {
    type: ADD_TASK,
    task
  }
}

export function getTasks(id) {
  return dispatch => {
    Task.All(id)
    .then(data => dispatch(handleAll(data)));
  }
}

export function addTask(task) {
  return dispatch => {
    Task.Create(task)
    .then(data => dispatch(handleSubmit(data)));
  }
}

export function editTask(task) {
  return {
    type: EDIT_TASK,
    task
  }
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id
  }
}