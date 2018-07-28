import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../../store/actions/tasks';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';
import Routes from './Routes';
import { Switch, Link, Route } from 'react-router-dom';

function Tasks(props) {
  // filter tasks for daily view
  let tasks;
  console.log(props);
  if (props.tasks.length > 0) {
    tasks = props.tasks.map(task => {
      return (
        <Routes
          user={props.user}
          key={task.id}
          task={task}
          date={props.date}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
          changeDate={props.changeDate}
          dateObject={props.dateObject}
        />
      )
    })
  }

  return (
    <div className="tasks">
      <DailyMenu />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/tasks/new"
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

function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { addTask })(Tasks);
