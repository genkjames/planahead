import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';

function Landing(props) {
  return (
    <div>
      <h1>PlanAhead</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <Link to="/dashboard">View dashboard</Link>
          )}
        />
        <Route
          exact path="/register"
          render={() => (
            <Register
              register={props.register}
            />
          )}
        />
        <Route
          exact path="/login"
          render={() => (
            <Login
              login={props.login}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default Landing;
