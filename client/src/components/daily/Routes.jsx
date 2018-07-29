import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import View from './View';
import Tasks from './tasks/Tasks';
import Events from './events/Events';
import Notes from './notes/Notes';
import Schedule from './schedule/Schedule';


function Routes(props) {
  return (
    <Switch>
      <Route 
        exact path='/dashboard/daily/'
        render={() => (
          <View 
            tasks={props.tasks}
            events={props.events}
            notes={props.notes}
            schedules={props.schedules}
          />
        )}
      />
      <Route
        path={`/dashboard/daily/tasks`}
        render={() => (
          <Tasks
            history={props.history}
            changeDate={props.changeDate}
            date={props.date}
            tasks={props.tasks}
            dateFormat={props.dateFormat}
            dateObject={props.dateObject}
          />
        )}
      />
      <Route
        path="/dashboard/daily/events"
        render={() => (
          <Events
            history={props.history}
            date={props.date}
            events={props.events}
            dateFormat={props.dateFormat}
            changeDate={props.changeDate}
            dateObject={props.dateObject}
          />
        )}
      />
      <Route
        path="/dashboard/daily/notes"
        render={() => (
          <Notes
            date={props.date}
            notes={props.notes}
            dateFormat={props.dateFormat}
            onNote={props.createNote}
            onEdit={props.updateNote}
            onDelete={props.deleteNote}
          />
        )}
      />
      <Route
        path="/dashboard/daily/schedule"
        render={() => (
          <Schedule
            date={props.date}
            dateFormat={props.dateFormat}
            schedules={props.schedules}
            onSchedule={props.createSchedule}
            onEdit={props.updateSchedule}
            onDelete={props.deleteSchedule}
          />
        )}
      />
      <Redirect to="/dashboard/daily/" />
    </Switch>
  )
}

export default Routes;
