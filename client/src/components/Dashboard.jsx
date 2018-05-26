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
  }

  changeDate(date) {
    this.setState({date})
    this.props.history.push('/dashboard/daily');
  }

  switchViews(date) {
    this.setState({
      date: date.activeStartDate
    })
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
              />
            )}
          />
          <Route
            path="/dashboard/daily"
            render={() => (
              <Daily
                date={this.state.date}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Dashboard;
