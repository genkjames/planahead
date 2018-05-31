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
        render={() => (
          <Landing
            user={props.user}
            register={props.register}
            login={props.login}
            logout={props.logout}
            errors={props.errors}
          />
        )}
      />
    </Switch>
  )
}

export default Main;
