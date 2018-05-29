import React, { Component } from 'react';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';
import TaskRoutes from './TaskRoutes';
import { Switch, Link, Route } from 'react-router-dom';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.compareDate = this.compareDate.bind(this);
  }

  compareDate(task) {
    const date = this.props.dateFormat(this.props.date);
    if(date === task.set_date) {
      return true;
    }
  }

  render() {
    // filter tasks for daily view
    const tasks = this.props.tasks.filter(this.compareDate).map(task => {
      return (
        <TaskRoutes
          key={task.id}
          task={task}
          date={this.props.date}
          onEdit={this.props.onEdit}
          onDelete={this.props.onDelete}
          changeDate={this.props.changeDate}
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
                  date={this.props.date}
                  onSubmit={this.props.onTask}
                  label="Add"
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
}

export default Tasks;
