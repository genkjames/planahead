import React, { Component } from 'react';
import { connect } from 'react-redux';

import View from './View';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.sortByDate = this.sortByDate.bind(this);
  }

  sortByDate(a, b) {
    if (a.set_date < b.set_date) {
      return -1;
    }

    if (a.set_date > b.set_date) {
      return 1;
    }

    return 0;
  }

  datesOfTasks(arr) {
    const dates = {};

    arr.forEach(date => {
      if(!dates.hasOwnProperty(date.set_date)) {
        dates[date.set_date] = [date];
      } else {
        dates[date.set_date].push(date);
      }
    });

    return dates;
  }

  render() {
    const tasksSortedByDate = this.props.tasks.sort(this.sortByDate);

    const dates = this.datesOfTasks(tasksSortedByDate);
    
    const tasks = Object.keys(dates).map(date => {
      return (
        <View 
          key={date}
          date={date}
          tasks={dates[date]}
          dateObject={this.props.dateObject}
        />
      )
    })

    return (
      <div className="all-tasks">
        <h1>Tasks</h1>
        {tasks}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, null)(Tasks);