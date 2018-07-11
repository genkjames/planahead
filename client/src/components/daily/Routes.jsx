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
        exact path="/dashboard/daily"
        render={() => (
          <View 
            tasks={props.tasks}
            events={props.events}
            notes={props.notes}
            schedules={props.schedules}
            onEditTask={props.updateTask}
            onDeleteTask={props.deleteTask}
          />
        )}
      />
      <Route
        path="/dashboard/daily/tasks"
        render={() => (
          <Tasks
            user={props.user}
            onTask={props.createTask}
            onEdit={props.updateTask}
            onDelete={props.deleteTask}
            changeDate={props.changeDate}
            date={props.date}
            tasks={props.tasks}
            dateFormat={props.dateFormat}
            dateObject={props.dateObject}
            compareDate={props.compareDate}
          />
        )}
      />
      <Route
        path="/dashboard/daily/events"
        render={() => (
          <Events
            user={props.user}
            date={props.date}
            events={props.events}
            compareDate={props.compareDate}
            dateFormat={props.dateFormat}
            changeDate={props.changeDate}
            dateObject={props.dateObject}
            onEvent={props.createEvent}
            onEdit={props.updateEvent}
            onDelete={props.deleteEvent}
          />
        )}
      />
      <Route
        path="/dashboard/daily/notes"
        render={() => (
          <Notes
            user={props.user}
            date={props.date}
            notes={props.notes}
            dateFormat={props.dateFormat}
            onNote={props.createNote}
            compareDate={props.compareDate}
            onEdit={props.updateNote}
            onDelete={props.deleteNote}
          />
        )}
      />
      <Route
        path="/dashboard/daily/schedule"
        render={() => (
          <Schedule
            user={props.user}
            date={props.date}
            dateFormat={props.dateFormat}
            schedules={props.schedules}
            onSchedule={props.createSchedule}
            onEdit={props.updateSchedule}
            onDelete={props.deleteSchedule}
            compareDate={props.compareDate}
          />
        )}
      />
      <Redirect to="/dashboard/daily" />
    </Switch>
  )
}

export default Routes;
