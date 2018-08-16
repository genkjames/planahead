import React from 'react';
import Tasks from '../daily/tasks/View';

function TaskView(props) {
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
      {tasks}
    </div>
  )
}

export default TaskView;