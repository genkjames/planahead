import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import TopNav from './navigation/TopNav';

class Monthly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(date) {
    this.props.onChange(date);
  }

  handleButton(date) {
    this.props.onSwitch(date);
  }

  showTasks() {
    this.props.taskDates.forEach(date => {
      const val = document.querySelector(`[datetime*="${date}"]`);
      if(val !== null) {
        let classes = val.parentElement.className.replace('hasTask', '');
        classes = val.parentElement.className += ' hasTask';
        val.parentElement.className = classes;
      }
    })
  }

  componentDidMount() {
    this.showTasks();
  }

  componentDidUpdate() {
    this.showTasks();
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
            prevLabel={<i className="fa fa-angle-left nav-arrow"></i>}
            prev2Label={<i className="fa fa-angle-double-left nav-arrow"></i>}
            nextLabel={<i className="fa fa-angle-right nav-arrow"></i>}
            next2Label={<i className="fa fa-angle-double-right nav-arrow"></i>}
          />
        </div>
      </div>
    )
  }
}

export default Monthly;
