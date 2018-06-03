import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';
import Content from './Content';

function Landing(props) {
  return (
    <div>
      <div className="landing-head">
        <h1 className="title">PlanAhead</h1>
      </div>
      <div className="background">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Content
                user={props.user}
              />
            )}
          />
          <Route
            exact path="/register"
            render={() => (
              <Register
                register={props.register}
                errors={props.errors}
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
    </div>
  )
}

export default Landing;
