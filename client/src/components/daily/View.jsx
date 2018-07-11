import React from 'react';
import Tasks from './tasks/View';

function View(props) {
  const tasks = props.tasks.map(task => {
    return (
      <Tasks 
        key={task.id}
        task={task}
        manipulate={false}
      />
    )
  })
  return (
    <div>     
      <h2>Tasks</h2>
      {tasks}
    </div>
  )
}

export default View;