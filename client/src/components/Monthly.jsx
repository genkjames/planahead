import React, { Component } from 'react';
import Calendar from 'react-calendar/';
import TopNav from './TopNav';

class Monthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(date) {
    this.setState({date})
  }

  handleButton(date) {
    this.setState({
      date: date.activeStartDate
    })
  }

  render() {
    return (
      <div>
        <TopNav />
        <Calendar
          onChange={this.handleChange}
          onClickMonth={this.handleChange}
          value={this.state.date}
          calendarType="US"
          onActiveDateChange={this.handleButton}
        />
        <div>{this.state.date.toDateString()}</div>
      </div>
    )
  }
}

export default Monthly;
