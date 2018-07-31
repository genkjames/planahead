import Schedule from '../../services/scheduleService';
import { GET_SCHEDULES, GET_SCHEDULE_DATES, ADD_SCHEDULE, EDIT_SCHEDULE, REMOVE_SCHEDULE } from '../actionTypes';

function handleSubmit(schedules) {
  type: GET_SCHEDULES,
  schedules
}

function handleDates(dates) {
  type: GET_SCHEDULE_DATES,
  dates
}

function handleSubmit(schedule) {
  type: ADD_SCHEDULE,
  schedule
}

function handleEdit(schedule) {
  type: EDIT_SCHEDULE,
  schedule
}

function handleDelete(id) {
  type: REMOVE_SCHEDULE,
  id
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