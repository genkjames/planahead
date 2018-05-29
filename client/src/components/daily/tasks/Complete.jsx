import React, { Component } from 'react';

class Complete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTask: {}
    }
  }

  handleClick() {
    console.log('gu');
  }

  render() {
    return (
      <div>
        <div className="task completed-task">
          <p className="fade" onClick={this.handleClick}>{this.props.task.text}</p>
          <div>
            <button onClick={() => this.props.handleDelete(this.props.task.id)}>
              <i className="fa fa-trash fade"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Complete
