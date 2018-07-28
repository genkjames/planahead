import Task from '../../services/taskService';
import { GET_TASKS, ADD_TASK, EDIT_TASK, REMOVE_TASK, GET_TASK_DATES } from '../actionTypes';

function handleAll(tasks) {
  return {
    type: GET_TASKS,
    tasks
  }
}

function handleDates(dates) {
  return {
    type: GET_TASK_DATES,
    dates
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
    .then(data => {console.log(data); dispatch(handleAll(data))});
  }
}

export function getTaskDates(id) {
  return dispatch => {
    Task.Dates(id) 
    .then(data => dispatch(handleDates(data)));
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