import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from '../../../store/actions/events';

import DailyMenu from '../../navigation/DailyMenu'
import Form from './Form';
import Routes from './Routes';

function Events(props) {
  let events;

  if(props.events.length > 0) {
    events = props.events.map(event => {
      return (
        <Routes
          key={event.id}
          user={props.user}
          event={event}
          date={props.date}
          onEdit={props.editEvent}
          onDelete={props.deleteEvent}
          changeDate={props.changeDate}
          dateObject={props.dateObject}
          history={props.history}
        />
      )
    })
  }

  return (
    <div className="events">
      <DailyMenu />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/events/new"
            render={() => (
              <Form
                user={props.user}
                date={props.date}
                dateFormat={props.dateFormat}
                onSubmit={props.addEvent}
                label="Add"
                history={props.history}
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

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    date: state.date.date
  }
}

export default connect(mapStateToProps, { addEvent, editEvent, deleteEvent })(Events);
