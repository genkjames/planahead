import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Form';

class Task extends Component {
  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <Switch>
        <Route
          path={`/dashboard/daily/tasks/edit/${this.props.task.id}`}
          render={() => (
            <Form
              date={this.props.date}
              onSubmit={this.props.onEdit}
              task={this.props.task}
              label="Edit"
              changeDate={this.props.changeDate}
            />
          )}
        />
        <Route
           path="/dashboard/daily/tasks/"
           render={() => (
            <div className="task">
              <p>{this.props.task.text}</p>
              <div>
                <Link to={`/dashboard/daily/tasks/edit/${this.props.task.id}`}>
                  <i className="fa fa-pencil"></i>
                </Link>
                <button onClick={() => this.handleDelete(this.props.task.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          )}
        />
      </Switch>
    )
  }
}

export default Task;
