import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import SideMenu from './components/SideMenu';
import Monthly from './components/Monthly';
import Daily from './components/Daily';

class App extends Component {
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
        <main>
          <Route exact path="/" render={() => (<Landing />)}/>
          <div className="dashboard"><Route
            path="/dashboard"
            render={() => (<SideMenu />)}
          />

          <Switch>
            <Route
              exact path="/dashboard"
              render={() => (<Monthly />)}
            />
            <Route
              path="/dashboard/daily"
              render={() => (<Daily />)}
            />
          </Switch></div>
        </main>
      </div>
    );
  }
}

export default App;
