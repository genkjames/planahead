import { GET_NOTES, GET_NOTE_DATES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actionTypes';

const initialState = {
  notes: [],
  noteDates: []
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_NOTES:
      return { ...state, notes: action.notes }
    case GET_NOTE_DATES:
      return { ...state, noteDates: action.dates }
    case ADD_NOTE:
      return { ...state, notes: [ ...state.notes, action.note ] }
    case EDIT_NOTE:
      const index = state.notes.findIndex(note => note.id === action.note.id);
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          action.note,
          ...state.notes.slice(index + 1)
        ]
      }
    case REMOVE_NOTE:
      const notes = state.notes.filter(note => note.id !== action.id);
      return { ...state, notes }
    default:
      return state;
  }
}