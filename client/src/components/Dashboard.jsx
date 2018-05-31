import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './navigation/SideMenu';
import Monthly from './Monthly';
import Daily from './daily/Daily';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.changeDate = this.changeDate.bind(this);
    this.switchViews = this.switchViews.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
    this.compareDate = this.compareDate.bind(this);
  }

  // onClick function for calendar date tiles
  changeDate(date) {
    this.setState({date});
    this.props.history.push('/dashboard/daily');
  }

  // onClick function for navigation arrows
  switchViews(date) {
    this.setState({
      date: date.activeStartDate
    })
  }

  // adds a 0 to any month or day field that has one digit
  dateLength(num) {
    if(num.toString().length === 1) {
      return '0' + num;
    }

    return num;
  }

  // formats date to input into the database
  dateFormat(date) {
    const month = this.dateLength(date.getMonth() + 1);
    const day = this.dateLength(date.getDate());
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // filters out tasks, events, etc. that aren't scheduled for a particular day
  compareDate(prod) {
    const date = this.dateFormat(this.state.date);
    if(date === prod.set_date) {
      return true;
    }
  }

  // converts set_date to an instance of a Date object to change the state of date if user updates
  createDateObject(date) {
    const newDate = new Date();
    const dateValues = date.set_date.split('-');
    newDate.setFullYear(dateValues[0]);
    newDate.setMonth(parseInt(dateValues[1], 10) - 1);
    newDate.setDate(dateValues[2]);
    return newDate;
  }

  render() {
    return (
      <div className="dashboard">
        <SideMenu />
        <Switch>
          <Route
            exact path="/dashboard"
            render={() => (
              <Monthly
                user={this.props.user}
                date={this.state.date}
                onChange={this.changeDate}
                onSwitch={this.switchViews}
                dateFormat={this.dateFormat}
                taskDates={this.props.taskDates}
                eventDates={this.props.eventDates}
                logout={this.props.logout}
              />
            )}
          />
          <Route
            path="/dashboard/daily"
            render={() => (
              <Daily
                user={this.props.user}
                date={this.state.date}
                onTask={this.props.onTask}
                updateTask={this.props.updateTask}
                deleteTask={this.props.deleteTask}
                changeDate={this.changeDate}
                tasks={this.props.tasks}
                compareDate={this.compareDate}
                dateFormat={this.dateFormat}
                dateObject={this.createDateObject}
                events={this.props.events}
                onEvent={this.props.onEvent}
                updateEvent={this.props.updateEvent}
                deleteEvent={this.props.deleteEvent}
                logout={this.props.logout}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Dashboard;
