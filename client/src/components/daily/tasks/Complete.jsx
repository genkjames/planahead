import React, { Component } from 'react';

class Complete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomplete: {}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onEdit(this.state.incomplete);
  }

  componentDidMount() {
    this.setState(() => {
      const { id, user_id, text, set_date } = this.props.task;
      return {
        incomplete: {
          id,
          user_id,
          text,
          set_date,
          is_complete: false
        }
      }
    })
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

export default Complete;
