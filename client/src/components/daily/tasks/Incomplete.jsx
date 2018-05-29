import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Complete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onEdit(this.state.complete);
  }

  componentDidMount() {
    this.setState(() => {
      const { id, user_id, text, set_date } = this.props.task;
      return {
        complete: {
          id,
          user_id,
          text,
          set_date,
          is_complete: true
        }
      }
    })
  }

  render() {
    return (
      <div>
        <div className="task">
          <p onClick={this.handleClick}>{this.props.task.text}</p>
          <div>
            <Link to={`/dashboard/daily/tasks/edit/${this.props.task.id}`}>
              <i className="fa fa-pencil"></i>
            </Link>
            <button onClick={() => this.props.handleDelete(this.props.task.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Complete