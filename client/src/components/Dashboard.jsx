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

    this.getDate = this.getDate.bind(this);
  }

  getDate(date) {
    this.setState({date})
    this.props.history.push('/dashboard/daily');
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
                onChange={this.getDate}
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
