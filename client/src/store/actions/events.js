import Event from '../../services/eventService';
import { GET_EVENTS, GET_EVENT_DATES, ADD_EVENT, EDIT_EVENT, REMOVE_EVENT } from '../actionTypes';

function handleAll(events) {
  return {
    type: GET_EVENTS,
    events
  }
}

function handleDates(dates) {
  return {
    type: GET_EVENT_DATES,
    dates
  }
}

function handleSubmit(event) {
  return {
    type: ADD_EVENT,
    event 
  }
}

function handleEdit(event) {
  return {
    type: EDIT_EVENT,
    event
  }
}

function handleDelete(id) {
  return {
    type: REMOVE_EVENT,
    id
  }
}

export function getEvents(id) {
  return dispatch => {
    Event.All(id)
    .then(data => dispatch(handleAll(data)));
  }
}

// fetch unique event dates to color code monthly view
export function getEventDates(id) {
  return dispatch => {
    Event.Dates(id)
    .then(data => dispatch(handleDates(data)));
  }
}

export function addEvent(event, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Event.Create(event)
      .then(data => dispatch(handleSubmit(data)));
    })
    .then(dispatch(getEventDates(id)));
  }
}

export function editEvent(event, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Event.Update(event)
      .then(data => dispatch(handleEdit(data)));
    })
    .then(dispatch(getEventDates(id)));
  }
}