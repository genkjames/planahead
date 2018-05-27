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

    }
  }

  fetchTasks() {
    console.log('fetching');
  }

  createTask(task) {
    console.log(task);
  }

  componentDidMount() {
    this.fetchTasks();
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
                onTask={this.createTask}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
