import Task from '../../services/taskService';
import { GET_TASKS, ADD_TASK, EDIT_TASK, REMOVE_TASK } from '../actionTypes';

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