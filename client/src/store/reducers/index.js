import { combineReducers } from 'redux';
import auth from './auth';
import tasks from './tasks';
import events from './events';
import notes from './notes';
import schedules from './schedules';
import date from './date';

const rootReducer = combineReducers({
  auth,
  tasks,
  events,
  notes,
  schedules,
  date
});

export default rootReducer;


