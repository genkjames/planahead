import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import TopNav from './navigation/TopNav';

class Monthly extends Component {
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(date) {
    this.props.onChange(date)
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
        <div className="calendar">
          <Calendar
            onChange={this.handleChange}
            onClickMonth={this.handleChange}
            value={this.props.date}
            calendarType="US"
            onActiveDateChange={this.handleButton}
          />
        </div>
      </div>
    )
  }
}

export default Monthly;
