import React from 'react';
import DailyMenu from '../../navigation/DailyMenu'
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form';
import Routes from './Routes';

function Events(props) {
  const events = props.events.filter(props.compareDate).map(event => {
    return (
      <Routes
        key={event.id}
        event={event}
        date={props.date}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        changeDate={props.changeDate}
        dateObject={props.dateObject}
      />
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
                label="Add"
              />)}
          />
          <Route
            path="/dashboard/daily/events"
            render={() => (
              <div className="add-new">
                <Link to="/dashboard/daily/events/new" className="links">Add Event</Link>
              </div>
              )
            }
          />
        </Switch>
        {events}
      </div>
    </div>
  )
}

export default Events;
