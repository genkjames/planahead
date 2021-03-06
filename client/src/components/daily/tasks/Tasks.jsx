import React from 'react';
import { connect } from 'react-redux';

import { addTask, editTask, deleteTask } from '../../../store/actions/tasks';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';
import Routes from './Routes';
import { Switch, Link, Route } from 'react-router-dom';

function Tasks(props) {
  // filter tasks for daily view
  let tasks;
  const date = props.dateFormat(props.date);
  
  if (props.tasks.length > 0) {
    tasks = props.tasks.map(task => {
      return (
        <Routes
          user={props.user}
          key={task.id}
          task={task}
          date={props.date}
          onEdit={props.editTask}
          onDelete={props.deleteTask}
          dateObject={props.dateObject}
          history={props.history}
        />
      )
    })
  }

  return (
    <div className="tasks">
      <DailyMenu date={date} />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/:id/tasks/new"
            render={() => (
              <Form
                user={props.user}
                date={props.date}
                onSubmit={props.addTask}
                label="Add"
                dateFormat={props.dateFormat}
                history={props.history}
              />)
            }
          />
          <Route
            path="/dashboard/daily/:id/tasks"
            render={() => (
              <div className="add-new">
                <Link to={`/dashboard/daily/${date}/tasks/new`} className="links">Add Task</Link>
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

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    date: state.date.date
  }
}

export default connect(mapStateToProps, { addTask, editTask, deleteTask })(Tasks);
