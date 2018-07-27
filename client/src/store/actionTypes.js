import Task from '../services/taskService';

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