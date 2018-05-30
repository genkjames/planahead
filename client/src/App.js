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
      tasks: [],
      taskDates: [],
      events: []
    }

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  fetchTasks() {
    fetch(`${BASE_URL}/tasks`)
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }));
  }

  fetchTaskDates() {
    fetch(`${BASE_URL}/tasks/dates`)
    .then(res => res.json())
    .then(data => this.setState({
      taskDates: data
    }))
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
        this.fetchTaskDates();
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
        this.fetchTaskDates();
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
        this.fetchTaskDates();
        return {
          tasks: prevState.tasks.filter(task => task.id !== id)
        }
      })
    })
  }

  fetchEvents() {
    fetch(`${BASE_URL}/events`)
    .then(resp => resp.json())
    .then(data => this.setState({
      events: data
    }));
  }

  createEvent(event) {
    const options = {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`${BASE_URL}/events`, options)
    .then(resp => resp.json())
    .then(data => {
      this.props.history.push('/dashboard/daily/events');
      this.setState((prevState) => {
        return {
          events: [...prevState.events, data]
        }
      })
    })
  }

  updateEvent(event) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`${BASE_URL}/events/${event.id}`, options)
    .then(res => {
      if (!res.ok) throw new Error('There was an error');
      return res.json()
    })
    .then(data => {
      this.props.history.push('/dashboard/daily/events')
      this.setState((prevState) => {
        const index = prevState.events.findIndex(event => event.id === data.id);
        return {
          events: [
            ...prevState.events.slice(0, index),
            data,
            ...prevState.events.slice(index + 1)
          ]
        }
      })
    });
  }

  deleteEvent(id) {
    fetch(`${BASE_URL}/events/${id}`, {method: 'DELETE'})
    .then(res => {
      if(!res.ok) throw new Error('There was an error');
      return res.json();
    })
    .then(data => {
      this.setState((prevState) => {
        return {
          events: prevState.events.filter(event => event.id !== id)
        }
      })
    })
  }

  componentDidMount() {
    this.fetchTasks();
    this.fetchTaskDates();
    this.fetchEvents();
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
                taskDates={this.state.taskDates}
                tasks={this.state.tasks}
                events={this.state.events}
                onEvent={this.createEvent}
                updateEvent={this.updateEvent}
                deleteEvent={this.deleteEvent}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
