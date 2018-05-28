import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  fetchTasks() {
    fetch(`${BASE_URL}/tasks`)
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }));
  }

  createTask(task) {
    const options = {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`${BASE_URL}/tasks`, options)
    .then(res => res.json())
    .then(data => {
      this.props.history.push('/dashboard/daily/tasks');
      this.setState((prevState) => {
        return {
          tasks: [...prevState.tasks, data]
        }
      })
    })
  }

  updateTask(task) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json'
      }
    }

    fetch(`${BASE_URL}/tasks/${task.id}`, options)
    .then(res => {
      if (!res.ok) throw new Error('There was an error');
      return res.json()
    })
    .then(data => {
      this.props.history.push('/dashboard/daily/tasks')
      this.setState((prevState) => {
        const index = prevState.tasks.findIndex(task => task.id === data.id);
        return {
          tasks: [
            ...prevState.tasks.slice(0, index),
            data,
            ...prevState.tasks.slice(index + 1)
          ]
        }
      })
    });
  }

  deleteTask(id) {
    fetch(`${BASE_URL}/tasks/${id}`, {method: 'DELETE'})
    .then(res => {
      if(!res.ok) throw new Error('There was an error');
      return res.json();
    })
    .then(data => {
      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.filter(task => task.id !== id)
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
                updateTask={this.updateTask}
                deleteTask={this.deleteTask}
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
