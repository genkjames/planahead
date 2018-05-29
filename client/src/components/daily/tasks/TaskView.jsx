import React, { Component } from 'react';
import Complete from './Complete';
import Incomplete from './Incomplete';

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTask: {}
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  handleEdit(task) {
    this.props.onEdit(task);
  }

  componentDidMount() {
    this.setState({
      completedTask: this.props.task
    })
  }

  render() {
    return (
      this.props.task.is_complete ? (
        <Complete
          handleDelete={this.handleDelete}
          task={this.props.task}
        />
      ) : (
        <Incomplete
          onEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          task={this.props.task}
        />
      )
    )
  }
}

export default TaskView;
