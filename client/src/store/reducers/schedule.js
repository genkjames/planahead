import { GET_SCHEDULES, GET_SCHEDULE_DATES, ADD_SCHEDULE, EDIT_SCHEDULE, REMOVE_SCHEDULE } from '../actionTypes';

const initialState = {
  schedules: [],
  scheduleDates: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SCHEDULES:
      return { ...state, schedules: action.schedules }
    case GET_SCHEDULE_DATES:
      return { ...state, scheduleDates: action.dates }
    case ADD_SCHEDULE:
      return { ...state, schedules: [ ...state.schedules, action.schedule ] }
    case EDIT_SCHEDULE:
    const index = state.schedules.findIndex(schedule => schedule.id === action.schedule.id);
      return { 
        ...state, 
        schedules: [
          ...state.schedules.slice(0, index),
          action.schedule,
          ...state.schedules.slice(index + 1)
        ]
      }
    case REMOVE_SCHEDULE:
      return { ...state, }
    default:
      return state;
  }
}