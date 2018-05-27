import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <DailyMenu />
        <button>Add Task</button>
      </div>
    )
  }
}

export default Tasks;
