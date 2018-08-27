import React from 'react';
import { connect } from 'react-redux';

import View from './View';

function Events(props) {
  const { events, sortByDate, datesOf, dateObject } = props;

  const eventsSortedByDate = events.sort(sortByDate);

  const dates = datesOf(eventsSortedByDate);

  const eventArrays = Object.keys(dates).map(event => {
    return (
      <View 
        key={event}
        event={event}
        events={dates[event]}
        dateObject={dateObject}
      />
    )
  })
  
  return (
    <div className="all-events">
      <h1>Events</h1>
      {eventArrays}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps, null)(Events);