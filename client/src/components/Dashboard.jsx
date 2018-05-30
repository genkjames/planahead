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

  changeDate(date) {
    this.setState({date});
    this.props.history.push('/dashboard/daily');
  }

  switchViews(date) {
    this.setState({
      date: date.activeStartDate
    })
  }

  dateLength(num) {
    if(num.toString().length === 1) {
      return '0' + num;
    }

    return num;
  }

  dateFormat(date) {
    const month = this.dateLength(date.getMonth() + 1);
    const day = this.dateLength(date.getDate());
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  compareDate(prod) {
    const date = this.dateFormat(this.state.date);
    if(date === prod.set_date) {
      return true;
    }
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
                date={this.state.date}
                onChange={this.changeDate}
                onSwitch={this.switchViews}
                dateFormat={this.dateFormat}
                taskDates={this.props.taskDates}
                eventDates={this.props.eventDates}
              />
            )}
          />
          <Route
            path="/dashboard/daily"
            render={() => (
              <Daily
                date={this.state.date}
                onTask={this.props.onTask}
                updateTask={this.props.updateTask}
                deleteTask={this.props.deleteTask}
                changeDate={this.changeDate}
                tasks={this.props.tasks}
                compareDate={this.compareDate}
                dateFormat={this.dateFormat}
                events={this.props.events}
                onEvent={this.props.onEvent}
                updateEvent={this.props.updateEvent}
                deleteEvent={this.props.deleteEvent}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Dashboard;
