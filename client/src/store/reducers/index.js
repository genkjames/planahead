import { combineReducers } from 'redux';
import auth from './auth';
import tasks from './tasks';
import events from './events';
import notes from './notes';

const rootReducer = combineReducers({
  auth,
  tasks,
  events,
  notes
});

export default rootReducer;


