import React from 'react';
import TaskView from '../daily/TaskView';

function View(props) {
  let date;

  if (props.date !== undefined) {
    date = props.dateObject({"set_date": props.date}).toDateString();
  }

  return (
    <div>
      <div className="container">
        <h2>{date}</h2>
        <TaskView 
          tasks={props.tasks}
        />
      </div>
    </div>
  )
}

export default View;