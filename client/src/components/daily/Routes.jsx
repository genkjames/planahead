import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tasks from './Tasks';
import Events from './Events';
import Notes from './Notes';
import Schedule from './Schedule';


function Routes(props) {
  return (
    <Switch>
      <Route
        path="/dashboard/daily/tasks"
        render={() => (
          <Tasks
            onTask={props.onTask}
            onEdit={props.updateTask}
            onDelete={props.deleteTask}
            date={props.date}
            tasks={props.tasks}
            dateFormat={props.dateFormat}
          />
        )}
      />
      <Route
        path="/dashboard/daily/events"
        render={() => (<Events />)}
      />
      <Route
        path="/dashboard/daily/notes"
        render={() => (<Notes />)}
      />
      <Route
        path="/dashboard/daily/schedule"
        render={() => (<Schedule />)}
      />
      <Redirect to="/dashboard/daily/tasks" />
    </Switch>
  )
}

export default Routes;
