import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      task: {
        text: '',
        is_complete: false,
        set_date: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        task: {
          ...prevState.task,
          [name]: value,
          user_id: prevState.user_id
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.task.id) {
      this.props.changeDate(this.state.task);
    }
    this.props.onSubmit(this.state.task);
  }

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
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text">Text</label>
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
          <button value="submit">{this.props.label} Task</button>
          <Link to="/dashboard/daily/tasks">Cancel</Link>
        </form>
      </div>
    )
  }
}

export default Form;
