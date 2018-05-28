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
      tasks: []
    }

    this.createTask = this.createTask.bind(this);
  }

  fetchTasks() {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }));
  }

  createTask(task) {
    console.log(task);
    const options = {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/tasks', options)
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(data => {
      this.props.history.push('/dashboard/daily/tasks');
      this.setState((prevState) => {
        return {
          tasks: [...prevState.tasks, data]
        }
      })
    })
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
                tasks={this.state.tasks}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
