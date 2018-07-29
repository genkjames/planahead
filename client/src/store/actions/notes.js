import Note from '../services/noteService';
import { GET_NOTES, GET_NOTE_DATES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actionTypes';

function handleAll(id) {
  return {
    type: GET_NOTES,
    notes
  }
}

function handleDates(id) {
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