import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import View from './View';

function Routes(props) {
  return (
    <Switch>
      <Route
        path={`/dashboard/daily/:id/tasks/edit/${props.task.id}`}
        render={() => (
          <Form
            user={props.user}
            date={props.date}
            onSubmit={props.onEdit}
            task={props.task}
            label="Edit"
            dateObject={props.dateObject}
            history={props.history}
          />
        )}
      />
      <Route
         path="/dashboard/daily/:id/tasks/"
         render={() => (
          <View
            user={props.user}
            task={props.task}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
            manipulate={true}
          />
        )}
      />
    </Switch>
  )
}

export default Routes;
