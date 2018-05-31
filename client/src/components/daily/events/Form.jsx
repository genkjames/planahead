import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        user_id: this.props.user.id,
        text: '',
        set_date: '',
        set_time: '12:00'
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
          user_id: this.props.user.id
        }
      }
    })
  }

  // converts set_date of event to an instance of a Date object to change the state of date if user updates the date of their event
  changeDate() {
    const newDate = this.props.dateObject(this.state.event);
    this.props.changeDate(newDate);
  }

  handleSubmit(e) {
    e.preventDefault();
    // checks if a user is updating an existing event
    if(this.state.event.id) {
      this.changeDate();
    }
    this.props.onSubmit(this.state.event);
  }

  // sets date when user creates a new event
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
        <form className="form" onSubmit={this.handleSubmit}>
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
              className="test"
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
            <button className="links" value="submit">{this.props.label} Event</button>
            <Link className="links" to="/dashboard/daily/events">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
