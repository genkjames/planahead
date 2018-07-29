import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import events from './events';
import notes from './notes';

const rootReducer = combineReducers({
  users,
  tasks,
  events,
  notes
})

export default rootReducer;


