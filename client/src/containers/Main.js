import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';

function Main(props) {
  return (
    <Switch>
      <Route
        path="/dashboard"
        render={({ history }) => (
          <Dashboard
            {...props}
            history={history}
          />
        )}
      />
      <Route
        path="/"
        component={Landing}
      />
    </Switch>
  )
}

export default Main;
