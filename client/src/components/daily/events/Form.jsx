import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      event: {
        text: '',
        set_date: '',
        set_time: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        event: {
          ...prevState.event,
          [name]: value,
          user_id: prevState.user_id
        }
      }
    })
  }

  changeDate() {
    const newDate = new Date();
    const dateValues = this.state.event.set_date.split('-');
    newDate.setFullYear(dateValues[0]);
    newDate.setMonth(parseInt(dateValues[1], 10) - 1);
    newDate.setDate(dateValues[2]);
    this.props.changeDate(newDate);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.event.id) {
      this.changeDate();
    }
    this.props.onSubmit(this.state.event);
  }

  setDate() {
    const date = this.props.dateFormat(this.props.date);
    this.setState((prevState) => {
      return {
        event: {
          ...prevState.event,
          set_date: date
        }
      }
    })
  }

  componentDidMount() {
    if (this.props.event) {
      this.setState({
        event: this.props.event
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
            <label htmlFor="text">Event</label>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="text"
              value={this.state.event.text}
              id="text"
            />
          </div>
          {this.props.event &&
          <div>
            <label htmlFor="set_date">Date</label>
            <input
              type="date"
              onChange={this.handleChange}
              value={this.state.event.set_date}
              name="set_date"
              id="set_date"
            />
          </div>}
          <div>
            <label htmlFor="set_datetime">Time</label>
            <input
              type="time"
              onChange={this.handleChange}
              value={this.state.event.set_time}
              name="set_time"
              id="set_time"
            />
          </div>
          <div>
            <button value="submit">Add Event</button>
            <Link to="/dashboard/daily/events">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
