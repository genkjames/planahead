import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';
import AuthMenu from './navigation/AuthMenu';

function Landing(props) {
  return (
    <div>
      <h1>PlanAhead</h1>
      <AuthMenu
        user={props.user}
      />
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <Link to="/dashboard">View dashboard</Link>
          )}
        />
        {props.user && <Redirect to="/" />}
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
              errors={props.errors}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default Landing;
