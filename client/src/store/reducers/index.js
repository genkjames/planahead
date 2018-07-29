import { combineReducers } from 'redux';
import users from './users';
import tasks from './tasks';
import events from './events';

const rootReducer = combineReducers({
  users,
  tasks,
  events
})

export default rootReducer;


