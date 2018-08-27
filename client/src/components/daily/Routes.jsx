import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import View from './View';
import Tasks from './tasks/Tasks';
import Events from './events/Events';
import Notes from './notes/Notes';
import Schedule from './schedule/Schedule';


function Routes(props) {
  const date = props.dateFormat(props.date);
  
  return (
    <Switch>
      <Route 
        exact path='/dashboard/daily/:id'
        render={() => (
          <View 
            tasks={props.tasks}
            events={props.events}
            notes={props.notes}
            schedules={props.schedules}
            dateFormat={props.dateFormat}
          />
        )}
      />
      <Route
        path="/dashboard/daily/:id/tasks"
        render={() => (
          <Tasks
            history={props.history}
            tasks={props.tasks}
            dateFormat={props.dateFormat}
            dateObject={props.dateObject}
          />
        )}
      />
      <Route
        path="/dashboard/daily/:id/events"
        render={() => (
          <Events
            history={props.history}
            events={props.events}
            dateFormat={props.dateFormat}
            dateObject={props.dateObject}
          />
        )}
      />
      <Route
        path="/dashboard/daily/:id/notes"
        render={() => (
          <Notes
            history={props.history}
            notes={props.notes}
            dateFormat={props.dateFormat}
          />
        )}
      />
      <Route
        path="/dashboard/daily/:id/schedule"
        render={() => (
          <Schedule
            history={props.history}
            dateFormat={props.dateFormat}
            schedules={props.schedules}
          />
        )}
      />
      <Redirect to={`/dashboard/daily/${date}`} />
    </Switch>
  )
}

export default Routes;
