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

function handleEdit(task) {
  return {
    type: EDIT_TASK,
    task
  }
}

function handleDelete(id) {
  return {
    type: REMOVE_TASK,
    id
  }
}

export function getTasks(id) {
  return dispatch => {
    Task.All(id)
    .then(data => dispatch(handleAll(data)));
  }
}

// fetch unique task dates to color code monthly view
export function getTaskDates(id) {
  return dispatch => {
    Task.Dates(id) 
    .then(data => dispatch(handleDates(data)));
  }
}

export function addTask(task, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {      
      Task.Create(task)
      .then(data => dispatch(handleSubmit(data)));
    })
    .then(dispatch(getTaskDates(id)));
  }
}

export function editTask(task, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {    
      Task.Update(task)
      .then(data => dispatch(handleEdit(data)));
    })
    .then(dispatch(getTaskDates(id)));
  }
}

export function deleteTask(id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Task.Delete(id)
      .then(data => dispatch(handleDelete(id)))
    })
    .then(dispatch(getTaskDates(id)));
  }
}