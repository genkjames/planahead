import React from 'react';
import DailyMenu from '../../navigation/DailyMenu'
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';

function Events(props) {
  const events = props.events.map(event => {
    return (
      <div key={event.id}>
        <p>{event.text}</p>
      </div>
    )
  })
  return (
    <div className="events">
      <DailyMenu />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/events/new"
            render={() => (
              <Form
                date={props.date}
                dateFormat={props.dateFormat}
                onSubmit={props.onEvent}
              />)}
          />
          <Route
            path="/dashboard/daily/events"
            render={() => (<Link to="/dashboard/daily/events/new">Add Event</Link>)}
          />
        </Switch>
        {events}
      </div>
    </div>
  )
}

export default Events;
