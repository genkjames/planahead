import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import TaskView from './TaskView';

function TaskRoutes(props) {
  return (
    <Switch>
      <Route
        path={`/dashboard/daily/tasks/edit/${props.task.id}`}
        render={() => (
          <Form
            date={props.date}
            onSubmit={props.onEdit}
            task={props.task}
            label="Edit"
            changeDate={props.changeDate}
          />
        )}
      />
      <Route
         path="/dashboard/daily/tasks/"
         render={() => (
          <TaskView
            task={props.task}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        )}
      />
    </Switch>
  )
}

export default TaskRoutes;
