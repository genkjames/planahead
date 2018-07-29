import { GET_EVENTS, GET_EVENT_DATES, ADD_EVENT, EDIT_EVENT, REMOVE_EVENT } from '../actionTypes';

const initialState = {
  events: [],
  eventDates: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case GET_EVENT_DATES:
      return { ...state, eventDates: action.dates };
    case ADD_EVENT:
      return { ...state, events: [ ...state.events, action.event ] };
    case EDIT_EVENT:
      const index = state.events.findIndex(event => event.id === action.event.id);
      return { 
        ...state, 
        events: [ 
          ...state.events.slice(0, index),
          action.event,
          ...state.events.slice(index + 1) 
        ] 
      };
    case REMOVE_EVENT:
      let events = state.events.filter(event => event.id !== action.id);
      return { ...state, events };
    default:
      return state;
  }
}
