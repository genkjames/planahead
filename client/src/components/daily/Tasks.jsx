import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <DailyMenu />
        <h2>Tasks</h2>
      </div>
    )
  }
}

export default Tasks;
