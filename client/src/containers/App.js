import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/users';
import Service from '../services/authService';
import Event from '../services/eventService';
import Note from '../services/noteService';
import Schedule from '../services/scheduleService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventDates: [],
      notes: [],
      noteDates: [],
      schedules: [],
      scheduleDates: []
    }

    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);

    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.createSchedule = this.createSchedule.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

  // CRUD Event Operations

  fetchEvents() {
    Event.All(this.state.user.id)
    .then(data => this.setState({
      events: data
    }));
  }

  // fetch unique event dates to color code monthly view
  fetchEventDates() {
    Event.Dates(this.state.user.id)
    .then(data => this.setState({
      eventDates: data
    }))
  }

  createEvent(event) {
    Event.Create(event)
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
    Event.Update(event)
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
    Event.Delete(id)
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
    Note.All(this.state.user.id)
    .then(data => this.setState({
      notes: data
    }));
  }

  // fetch unique note dates to color code monthly view
  fetchNoteDates() {
    Note.Dates(this.state.user.id)
    .then(data => this.setState({
      noteDates: data
    }))
  }

  createNote(note) {
    Note.Create(note)
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
    Note.Update(note)
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
    Note.Delete(id)
    .then(data => {
      this.setState((prevState) => {
        this.fetchNoteDates();
        return {
          notes: prevState.notes.filter(note => note.id !== id)
        }
      })
    })
  }

  // CRUD Schedule Operations

  fetchSchedule() {
    Schedule.All(this.state.user.id)
    .then(data => this.setState({
      schedules: data
    }));
  }

  // fetch unique schedule dates to color code monthly view
  fetchScheduleDates() {
    Schedule.Dates(this.state.user.id)
    .then(data => this.setState({
      scheduleDates: data
    }));
  }

  createSchedule(schedule) {
    Schedule.Create(schedule)
    .then(data => {
      this.setState((prevState) => {
        this.fetchScheduleDates();
        return {
          schedules: [...prevState.schedules, data]
        }
      })
    })
  }

  updateSchedule(schedule) {
    Schedule.Update(schedule)
    .then(data => {
      this.setState((prevState) => {
        this.fetchScheduleDates();
        const index = prevState.schedules.findIndex(schedule => schedule.id === data.id);
        return {
          schedules: [
            ...prevState.schedules.slice(0, index),
            data,
            ...prevState.schedules.slice(index + 1)
          ]
        }
      })
    });
  }

  deleteSchedule(id) {
    Schedule.Delete(id)
    .then(data => {
      this.setState((prevState) => {
        this.fetchScheduleDates();
        return {
          schedules: prevState.schedules.filter(schedule => schedule.id !== id)
        }
      })
    })
  }

  // Auth

  // fetchCalls() {
  //   this.fetchTasks();
  //   this.fetchTaskDates();
  //   this.fetchEvents();
  //   this.fetchEventDates();
  //   this.fetchNotes();
  //   this.fetchNoteDates();
  //   this.fetchSchedule();
  //   this.fetchScheduleDates();
  // }

  isLoggedIn() {
    if (localStorage.getItem('authToken') !== null) {
      if(localStorage.getItem('authToken') !== "undefined") {
        return true;
      }
    }
  }

  // logout() {
  //   Service.destroyToken();
  //   this.setState({
  //     user: false,
  //     tasks: [],
  //     taskDates: [],
  //     events: [],
  //     eventDates: [],
  //     notes: [],
  //     noteDates: [],
  //     schedules: [],
  //     scheduleDates: []
  //   })
  //   this.props.history.push('/');
  // }

  componentDidMount() {
    if(Service.fetchToken() !== "undefined") {
      this.props.checkUser();
    }
  }

  render() {
    return (
      <div>
        <main>
          <Main
            isLoggedIn={this.isLoggedIn}
            events={this.state.events}
            createEvent={this.createEvent}
            updateEvent={this.updateEvent}
            deleteEvent={this.deleteEvent}
            eventDates={this.state.eventDates}
            errors={this.state.errors}
            notes={this.state.notes}
            noteDates={this.state.noteDates}
            createNote={this.createNote}
            updateNote={this.updateNote}
            deleteNote={this.deleteNote}
            schedules={this.state.schedules}
            scheduleDates={this.state.scheduleDates}
            createSchedule={this.createSchedule}
            updateSchedule={this.updateSchedule}
            deleteSchedule={this.deleteSchedule}
          />
        </main>
      </div>
    );
  }
}

export default connect(null, { checkUser })(App);
