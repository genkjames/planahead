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
            component={Content}
          />
          <Route
            exact path="/register"
            component={Register}
          />
          <Route
            exact path="/login"
            component={Login}
          />
        </Switch>
      </div>
    </div>
  )
}

export default Landing;
