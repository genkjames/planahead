import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      event: {
        text: '',
        set_datetime: ''
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
          [name]: value
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit event form');
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
          <div>
            <label htmlFor="set_datetime">Date</label>
            <input
              type="time"
              onChange={this.handleChange}
              value={this.state.event.set_datetime}
              name="set_datetime"
              id="set_datetime"
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
