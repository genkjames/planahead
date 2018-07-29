import React, { Component } from 'react';
import Complete from './Complete';
import Incomplete from './Incomplete';

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
          user={this.props.user}
          onEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          task={this.props.task}
          manipulate={this.props.manipulate}
        />
      ) : (
        <Incomplete
          user={this.props.user}
          onEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          task={this.props.task}
          manipulate={this.props.manipulate}
        />
      )
    )
  }
}

export default View;
