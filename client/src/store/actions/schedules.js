import Schedule from '../../services/scheduleService';
import { GET_SCHEDULES, GET_SCHEDULE_DATES, ADD_SCHEDULE, EDIT_SCHEDULE, REMOVE_SCHEDULE } from '../actionTypes';

function handleAll(schedules) {
  return {
    type: GET_SCHEDULES,
    schedules
  }
}

function handleDates(dates) {
  return {    
    type: GET_SCHEDULE_DATES,
    dates
  }
}

function handleSubmit(schedule) {
  return {
    type: ADD_SCHEDULE,
    schedule
  }
}

function handleEdit(schedule) {
  return {
    type: EDIT_SCHEDULE,
    schedule
  }
}

function handleDelete(id) {
  return {
    type: REMOVE_SCHEDULE,
    id
  }
}

export function getSchedules(id) {
  return dispatch => {
    Schedule.All(id)
    .then(data => dispatch(handleAll(data)));
  }
}

// fetch unique schedule dates to color code monthly view
export function getScheduleDates(id) {
  return dispatch => {
    Schedule.Dates(id)
    .then(data => dispatch(handleDates(data)));
  }
}

export function addSchedule(schedule, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Schedule.Create(schedule)
      .then(data => dispatch(handleSubmit(data)))
      .then(() => dispatch(getScheduleDates(id)));
    })
  }
}

export function editSchedule(schedule, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Schedule.Update(schedule)
      .then(data => dispatch(handleEdit(data)))
      .then(() => dispatch(getScheduleDates(id)));
    })
  }
}