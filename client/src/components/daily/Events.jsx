import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu'

class Events extends Component {
  render() {
    return (
      <div className="events">
        <DailyMenu />
        <button>Add Event</button>
      </div>
    )
  }
}

export default Events;
