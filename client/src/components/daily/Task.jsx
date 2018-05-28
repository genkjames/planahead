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
            />
          )}
        />
        <Route
           path="/dashboard/daily/tasks/"
           render={() => (
            <div>
              <h2>{this.props.task.text}</h2>
              <p>{this.props.task.set_date}</p>
              <Link to={`/dashboard/daily/tasks/edit/${this.props.task.id}`}>Edit</Link>
              <button onClick={() => this.handleDelete(this.props.task.id)}>Delete</button>
            </div>
          )}
        />
      </Switch>
    )
  }
}

export default Task;
