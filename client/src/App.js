import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      juices: []
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

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <main>
          <Route exact path="/" render={() => (<Landing />)}/>
          <Route
            path="/dashboard"
            render={({ history }) => (
              <Dashboard
                history={history}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
