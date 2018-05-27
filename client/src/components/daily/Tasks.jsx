import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';
import Form from './Form';
import { Link, Route } from 'react-router-dom';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onTask(this.props.date);
  }

  render() {
    return (
      <div className="tasks">
        <DailyMenu />
        <Link to="/dashboard/daily/tasks/new">Add Task</Link>
        <Route
          path="/dashboard/daily/tasks/new"
          render={() => (<Form />)}
        />
      </div>
    )
  }
}

export default Tasks;
