import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import View from './View';

function Routes(props) {
  return (
    <Switch>
      <Route
        path={`/dashboard/daily/:id/events/edit/${props.event.id}`}
        render={() => (
          <Form
            user={props.user}
            date={props.date}
            onSubmit={props.onEdit}
            event={props.event}
            label="Edit"
            dateObject={props.dateObject}
            history={props.history}
          />
        )}
      />
      <Route
         path="/dashboard/daily/:id/events/"
         render={() => (
          <View
            user={props.user}
            event={props.event}
            onDelete={props.onDelete}
            manipulate={true}
          />
        )}
      />
    </Switch>
  )
}

export default Routes;
