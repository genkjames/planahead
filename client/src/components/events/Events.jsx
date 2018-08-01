import React from 'react';
import { connect } from 'react-redux';

function Events(props) {
  return (
    <div className="all-events">
      <h1>Events</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps, null)(Events);