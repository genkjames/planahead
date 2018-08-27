import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeDate } from '../../../store/actions/date';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        user_id: '',
        text: '',
        is_complete: false,
        set_date: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // converts set_date of task to an instance of a Date object to change the state of date if user updates the date of their task
  changeDate() {
    const newDate = this.props.dateObject(this.state.task.set_date);
    this.props.changeDate(newDate);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        task: {
          ...prevState.task,
          [name]: value,
          user_id: this.props.user.id
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // checks if a user is updating an existing task
    if(this.state.task.id) {
      this.changeDate();
    }
    this.props.onSubmit(this.state.task, this.props.user.id)
    .then(this.props.history.push(`/dashboard/daily/${this.state.task.set_date}/tasks`));
  }

  // sets date when user creates a new task
  setDate() {
    const date = this.props.dateFormat(this.props.date);
    this.setState((prevState) => {
      return {
        task: {
          ...prevState.task,
          set_date: date
        }
      }
    })
  }

  componentDidMount() {
    if(this.props.task) {
      this.setState({
        task: this.props.task
      })
    } else {
      this.setDate();
    }
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text">Task</label>
            <textarea
              type="text"
              onChange={this.handleChange}
              value={this.state.task.text}
              name="text"
              id="text"
            />
          </div>
          {this.props.task &&
          <div>
            <label htmlFor="set_date">Date</label>
            <input
              type="date"
              onChange={this.handleChange}
              value={this.state.task.set_date}
              name="set_date"
              id="set_date"
            />
          </div>}
          <div>
            <button className="links" value="submit">{this.props.label} Task</button>
            <Link className="links" to={`/dashboard/daily/${this.state.task.set_date}/tasks`}>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { changeDate })(Form);
