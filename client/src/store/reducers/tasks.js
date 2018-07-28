import { GET_TASKS, ADD_TASK, REMOVE_TASK, GET_TASK_DATES } from '../actionTypes';

const initialState = {
  tasks: [],
  taskDates: []
}

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.tasks }
    case GET_TASK_DATES:
      return { ...state, taskDates: action.dates}
    case ADD_TASK:
      return { ...state, tasks: [ ...state.tasks, action.task ] }
    case REMOVE_TASK:
      let tasks = state.tasks.filter(task => task.id !== action.id);
      return { ...state, tasks }
    default:
      return state;
  }
}