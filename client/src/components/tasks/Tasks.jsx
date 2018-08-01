import React from 'react';
import { connect } from 'react-redux';

import View from './View';

function Tasks(props) {
  const { tasks, datesOf, dateObject, sortByDate } = props;

  const tasksSortedByDate = tasks.sort(sortByDate);

  const dates = datesOf(tasksSortedByDate);
  
  const taskArrays = Object.keys(dates).map(date => {
    return (
      <View 
        key={date}
        date={date}
        tasks={dates[date]}
        dateObject={dateObject}
      />
    )
  })

  return (
    <div className="all-tasks">
      <h1>Tasks</h1>
      {taskArrays}
    </div>
  )
  
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, null)(Tasks);