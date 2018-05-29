import React, { Component } from 'react';
import DailyMenu from '../../navigation/DailyMenu'
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';

class Events extends Component {
  render() {
    return (
      <div className="events">
        <DailyMenu />
        <div className="container">
          <Switch>
            <Route
              path="/dashboard/daily/events/new"
              render={() => (<Form />)}
            />
            <Route
              path="/dashboard/daily/events"
              render={() => (<Link to="/dashboard/daily/events/new">Add Event</Link>)}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Events;
