import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Service from '../services/apiService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      errors: false,
      tasks: [],
      taskDates: [],
      events: [],
      eventDates: [],
      notes: [],
      noteDates: []
    }

    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);

    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isUser = this.isUser.bind(this);
  }

  // CRUD Task Operations

  fetchTasks() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/tasks/users/${this.state.user.id}`, options)
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }));
  }

  // fetch unique task dates to color code monthly view
  fetchTaskDates() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/tasks/dates/${this.state.user.id}`, options)
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
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
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
        'Content-type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
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
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/tasks/${id}`, options)
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

  // CRUD Event Operations

  fetchEvents() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/events/users/${this.state.user.id}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      events: data
    }));
  }

  // fetch unique event dates to color code monthly view
  fetchEventDates() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/events/dates/${this.state.user.id}`, options)
    .then(res => res.json())
    .then(data => this.setState({
      eventDates: data
    }))
  }

  createEvent(event) {
    const options = {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/events`, options)
    .then(resp => resp.json())
    .then(data => {
      this.props.history.push('/dashboard/daily/events');
      this.setState((prevState) => {
        this.fetchEventDates();
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
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
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
        this.fetchEventDates();
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
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/events/${id}`, options)
    .then(res => {
      if(!res.ok) throw new Error('There was an error');
      return res.json();
    })
    .then(data => {
      this.setState((prevState) => {
        this.fetchEventDates();
        return {
          events: prevState.events.filter(event => event.id !== id)
        }
      })
    })
  }

  // CRUD Note operations

  fetchNotes() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/notes/users/${this.state.user.id}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      notes: data
    }));
  }

  // fetch unique note dates to color code monthly view
  fetchNoteDates() {
    const options = {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/notes/dates/${this.state.user.id}`, options)
    .then(res => res.json())
    .then(data => this.setState({
      noteDates: data
    }))
  }

  createNote(note) {
    const options = {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/notes`, options)
    .then(resp => resp.json())
    .then(data => {
      this.props.history.push('/dashboard/daily/notes');
      this.fetchNoteDates();
      this.setState((prevState) => {
        return {
          notes: [...prevState.notes, data]
        }
      })
    })
  }

  updateNote(note) {
    debugger;
    const options = {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/notes/${note.id}`, options)
    .then(res => {
      if (!res.ok) throw new Error('There was an error');
      return res.json()
    })
    .then(data => {
      this.props.history.push('/dashboard/daily/notes')
      this.setState((prevState) => {
        const index = prevState.notes.findIndex(note => note.id === data.id);
        return {
          notes: [
            ...prevState.notes.slice(0, index),
            data,
            ...prevState.notes.slice(index + 1)
          ]
        }
      })
    });
  }

  deleteNote(id) {
    debugger;
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }

    fetch(`${BASE_URL}/notes/${id}`, options)
    .then(res => {
      if(!res.ok) throw new Error('There was an error');
      return res.json();
    })
    .then(data => {
      this.setState((prevState) => {
        this.fetchNoteDates();
        return {
          notes: prevState.notes.filter(note => note.id !== id)
        }
      })
    })
  }

  // Auth

  fetchCalls() {
    this.fetchTasks();
    this.fetchTaskDates();
    this.fetchEvents();
    this.fetchEventDates();
    this.fetchNotes();
    this.fetchNoteDates();
  }

  register(user) {
    Service.register({user: user})
    .then(data => {
      Service.saveToken(data.token);
      this.setState({user: data.user})
    })
    .catch(err => console.log(err.message))
  }

  login(user) {
    Service.login({session: user})
    .then(data => {
      if(data.user) {
        Service.saveToken(data.token)
        this.setState({
          user: data.user,
          errors: false
        })
        this.props.history.push('/dashboard');
        this.fetchCalls();
      } else {
        this.setState({
          user: false,
          errors: data.errors
        })
      }
    })
    .catch(err => this.setState({errors: {message: "Some error"}}))
  }

  isUser() {
    fetch(`${BASE_URL}/login`, {
      headers: {
        Authorization: `Bearer ${Service.fetchToken()}`
      }
    }).then(resp => resp.json())
    .then(user => {
      this.setState({user})
      this.fetchCalls();
    })
    .catch(err => this.setState({user: false}))
  }

  logout() {
    Service.destroyToken();
    this.setState({
      user: false,
      tasks: [],
      taskDates: [],
      events: [],
      eventDates: []
    })
    this.props.history.push('/');
  }

  componentDidMount() {
    if(Service.fetchToken() !== "undefined") {
      this.isUser();
    }
  }

  render() {
    return (
      <div>
        <main>
          <Main
            user={this.state.user}
            logout={this.logout}
            register={this.register}
            login={this.login}
            onTask={this.createTask}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
            taskDates={this.state.taskDates}
            tasks={this.state.tasks}
            events={this.state.events}
            onEvent={this.createEvent}
            updateEvent={this.updateEvent}
            deleteEvent={this.deleteEvent}
            eventDates={this.state.eventDates}
            errors={this.state.errors}
            notes={this.state.notes}
            noteDates={this.state.noteDates}
            onNote={this.createNote}
            updateNote={this.updateNote}
            deleteNote={this.deleteNote}
          />
        </main>
      </div>
    );
  }
}

export default App;
