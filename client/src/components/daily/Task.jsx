import React, { Component } from 'react';

class Task extends Component {
  handleUpdate() {

  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.task.text}</h2>
        <p>{this.props.task.set_date}</p>
        <button>Update</button>
        <button onClick={() => this.handleDelete(this.props.task.id)}>Delete</button>
      </div>
    )
  }
}

export default Task;
