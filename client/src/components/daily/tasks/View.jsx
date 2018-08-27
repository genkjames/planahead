import React, { Component } from 'react';
import CompletionStatus from './CompletionStatus';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTask: {}
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
    this.props.onDelete(id, this.props.user.id);
  }

  handleEdit(task) {
    this.props.onEdit(task, this.props.user.id);
  }

  componentDidMount() {
    this.setState({
      completedTask: this.props.task
    })
  }

  render() {
    return (
      <CompletionStatus
        user={this.props.user}
        onEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        task={this.props.task}
        manipulate={this.props.manipulate}
      />
    )
  }
}

export default View;
