import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.task.text}</h2>
        <p>{this.props.task.set_date}</p>
      </div>
    )
  }
}

export default Task;
