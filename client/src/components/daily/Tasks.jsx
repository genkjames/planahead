import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';
import Form from './Form';
import Task from './Task';
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
    const tasks = this.props.tasks.filter(this.compareDate).map(task => {
      return (
        <Task
          key={task.id}
          task={task}
          onDelete={this.props.onDelete}
        />
      )
    })
    return (
      <div className="tasks">
        <DailyMenu />
        <Switch>
          <Route
            path="/dashboard/daily/tasks/new"
            render={() => (
              <Form
                date={this.props.date}
                onSubmit={this.props.onTask}
              />)
            }
          />
          <Route
            path="/dashboard/daily/tasks"
            render={() => (
              <Link to="/dashboard/daily/tasks/new">Add Task</Link>
              )
            }
          />
        </Switch>
        {tasks}
      </div>
    )
  }
}

export default Tasks;
