import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Incomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

   // when clicked task is updated to being complete in database
  handleClick() {
    this.props.onEdit(this.state.complete);
  }

  componentDidMount() {
    this.setState(() => {
       // sets initial state so when task text is clicked it becomes complete
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
        <div className="view task">
          <p onClick={this.handleClick}>{this.props.task.text}</p>
          {this.props.manipulate && <div className="actions">
            <Link to={`/dashboard/daily/${this.props.task.set_date}/tasks/edit/${this.props.task.id}`}>
              <i className="fa fa-pencil fa-hover"></i>
            </Link>
            <button onClick={() => this.props.handleDelete(this.props.task.id)}>
              <i className="fa fa-trash fa-hover"></i>
            </button>
          </div>}
        </div>
      </div>
    )
  }
}

export default Incomplete;
