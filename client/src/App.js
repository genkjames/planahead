import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import SideMenu from './components/SideMenu';
import Monthly from './components/Monthly';

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
      <div className="App">
        <main>
          <Route exact path="/" render={() => (<Landing />)}/>
          <Route
            path="/dashboard"
            render={() => (<SideMenu />)}
          />

          <Switch>
            <Route
              exact path="/dashboard/monthly"
              render={() => (<Monthly />)}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
