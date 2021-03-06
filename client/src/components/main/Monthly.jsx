import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { connect } from 'react-redux';

import { changeDate } from '../../store/actions/date';

class Monthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  // handles change in calendar tiles when clicked
  handleChange(date) {
    const formattedDate = this.props.dateFormat(date);
    this.props.changeDate(date)
    .then(this.props.history.push(`/dashboard/daily/${formattedDate}`));
  }

  // handles change in navigation arrows when clicked
  handleButton(date) {
    this.props.changeDate(date.activeStartDate);
  }

  // allows users to see when a date has a task or event scheduled
  colorCodes(arr, elName) {
    if (arr.length > 0) {
      arr.forEach(date => {
        const val = document.querySelector(`[datetime*="${date}"]`);
        if(val !== null) {
          let element = elName;
          element = document.createElement("div");
          element.className = elName;
          val.parentElement.appendChild(element)
        }
      })
    }
  }

  setColorCodes() {
    this.colorCodes(this.props.taskDates, 'hasTask');
    this.colorCodes(this.props.eventDates, 'hasEvent');
    this.colorCodes(this.props.noteDates, 'hasNote');
    this.colorCodes(this.props.scheduleDates, 'hasSchedule');
  }

  componentDidMount() {
    this.setColorCodes();
  }

  componentDidUpdate() {
    this.setColorCodes();
  }

  render() {
    return (
      <div>
        <div className="calendar">
          <Calendar
            onChange={this.handleChange}
            onClickMonth={this.handleChange}
            value={this.props.date}
            calendarType="US"
            onActiveDateChange={this.handleButton}
            prevLabel={<i className="fa fa-angle-left nav-arrow"></i>}
            prev2Label={<i className="fa fa-angle-double-left nav-arrow"></i>}
            nextLabel={<i className="fa fa-angle-right nav-arrow"></i>}
            next2Label={<i className="fa fa-angle-double-right nav-arrow"></i>}
          />
        </div>
        <div className="color-codes">
          <ul>
            <li className="tasks-color code">Tasks</li>
            <li className="events-color code">Events</li>
            <li className="notes-color code">Notes</li>
            <li className="schedule-color code">Schedule</li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    taskDates: state.tasks.taskDates,
    eventDates: state.events.eventDates,
    noteDates: state.notes.noteDates,
    scheduleDates: state.schedules.scheduleDates,
    date: state.date.date
  }
}

export default connect(mapStateToProps, { changeDate })(Monthly);
