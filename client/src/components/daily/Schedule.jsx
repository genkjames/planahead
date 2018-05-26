import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <DailyMenu />
        <h2>Schedule</h2>
      </div>
    )
  }
}

export default Schedule;
