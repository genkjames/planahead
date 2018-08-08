import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './navigation/SideMenu';
import TopNav from './navigation/TopNav';
import Monthly from './Monthly';
import Daily from './daily/Daily';
import Tasks from './tasks/Tasks';
import Events from './events/Events';
import Notes from './notes/Notes';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.dateFormat = this.dateFormat.bind(this);
    this.compareDate = this.compareDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
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
  compareDate(prod, date) {
    const prodDate = this.dateFormat(date);
    if(prodDate === prod.set_date) {
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

  sortByDate(a, b) {
    if (a.set_date < b.set_date) {
      return -1;
    }

    if (a.set_date > b.set_date) {
      return 1;
    }

    return 0;
  }

  datesOf(arr) {
    const dates = {};

    arr.forEach(date => {
      if(!dates.hasOwnProperty(date.set_date)) {
        dates[date.set_date] = [date];
      } else {
        dates[date.set_date].push(date);
      }
    });

    return dates;
  }

  componentDidMount() {
    if (!this.props.isLoggedIn()) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="dashboard">
        <SideMenu />
        <div>
          <TopNav
            history={this.props.history}
          />
          <Switch>
            <Route
              exact path="/dashboard"
              render={({ history }) => (
                <Monthly history={history} />
              )}
            />
            <Route
              path="/dashboard/daily"
              render={({ history }) => (
                <Daily
                  history={history}
                  compareDate={this.compareDate}
                  dateFormat={this.dateFormat}
                  dateObject={this.createDateObject}
                />
              )}
            />
            <Route 
              path="/dashboard/tasks"
              render={() => (
                <Tasks 
                  dateObject={this.createDateObject} 
                  sortByDate={this.sortByDate}
                  datesOf={this.datesOf}
                />
              )}
            />
            <Route 
              path="/dashboard/events"
              render={() => (
                <Events 
                  dateObject={this.createDateObject}
                  sortByDate={this.sortByDate}
                  datesOf={this.datesOf}
                />
              )}
            />
            <Route 
              path="/dashboard/notes"
              render={() => (
                <Notes 
                  dateObject={this.createDateObject}
                  sortByDate={this.sortByDate}
                  datesOf={this.datesOf}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Dashboard;
