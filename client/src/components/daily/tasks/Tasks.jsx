import React from 'react';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';
import TaskRoutes from './TaskRoutes';
import { Switch, Link, Route } from 'react-router-dom';

function Tasks(props) {
    // filter tasks for daily view
  const tasks = props.tasks.filter(props.compareDate).map(task => {
    return (
      <TaskRoutes
        key={task.id}
        task={task}
        date={props.date}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        changeDate={props.changeDate}
      />
    )
  })

  return (
    <div className="tasks">
      <DailyMenu />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/tasks/new"
            render={() => (
              <Form
                date={props.date}
                onSubmit={props.onTask}
                label="Add"
                dateFormat={props.dateFormat}
              />)
            }
          />
          <Route
            path="/dashboard/daily/tasks"
            render={() => (
              <div className="add-new">
                <Link to="/dashboard/daily/tasks/new" className="links">Add Task</Link>
              </div>
              )
            }
          />
        </Switch>
        {tasks}
      </div>
    </div>
  )
}

export default Tasks;
