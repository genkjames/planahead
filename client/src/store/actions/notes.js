import Note from '../../services/noteService';
import { GET_NOTES, GET_NOTE_DATES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actionTypes';

function handleAll(notes) {
  return {
    type: GET_NOTES,
    notes
  }
}

function handleDates(dates) {
  return {
    type: GET_NOTE_DATES,
    dates
  }
}

function handleSubmit(note) {
  return {
    type: ADD_NOTE,
    note
  }
}

function handleEdit(note) {
  return {
    type: EDIT_NOTE,
    note
  }
}

function handleDelete(id) {
  return {
    type: REMOVE_NOTE,
    id
  }
}

export function getNotes(id) {
  return dispatch => {
    Note.All(id)
    .then(data => dispatch(handleAll(data)));
  }
}

// fetch unique note dates to color code monthly view
export function getNoteDates(id) {
  return dispatch => {
    Note.Dates(id)
    .then(data => dispatch(handleDates(data)));
  }
}

export function addNote(note, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Note.Create(note)
      .then(data => dispatch(handleSubmit(data)))
      .then(() => dispatch(getNoteDates(id)));
    })
  }
}

export function editNote(note, id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Note.Update(note)
      .then(data => dispatch(handleEdit(data)))
      .then(() => dispatch(getNoteDates(id)));
    })
  }
}

export function deleteNote(id, userId) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Note.Delete(id)
      .then(data => dispatch(handleDelete(id)))
      .then(() => dispatch(getNoteDates(userId)));     
    })
  }
}