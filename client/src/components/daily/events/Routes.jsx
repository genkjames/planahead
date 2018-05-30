import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import View from './View';

function Routes(props) {
  return (
    <Switch>
      <Route
        path={`/dashboard/daily/events/edit/${props.event.id}`}
        render={() => (
          <Form
            date={props.date}
            onSubmit={props.onEdit}
            event={props.event}
            label="Edit"
            changeDate={props.changeDate}
          />
        )}
      />
      <Route
         path="/dashboard/daily/events/"
         render={() => (
          <View
            event={props.event}
            onDelete={props.onDelete}
          />
        )}
      />
    </Switch>
  )
}

export default Routes;
