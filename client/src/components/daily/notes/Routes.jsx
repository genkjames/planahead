import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import View from './View';

function Routes(props) {
  return (
    <Switch>
      <Route
        path={`/dashboard/daily/notes/edit/${props.note.id}`}
        render={() => (
          <Form
            user={props.user}
            date={props.date}
            note={props.note}
            label="Edit"
            onSubmit={props.onEdit}
          />
        )}
      />
      <Route
         path="/dashboard/daily/notes/"
         render={() => (
          <View
            note={props.note}
            onDelete={props.onDelete}
          />
        )}
      />
    </Switch>
  )
}

export default Routes;
