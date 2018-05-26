import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu'

class Events extends Component {
  render() {
    return (
      <div className="events">
        <DailyMenu />
        <h2>Events</h2>
      </div>
    )
  }
}

export default Events;
