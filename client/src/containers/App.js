import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/auth';
import Service from '../services/authService';
import Note from '../services/noteService';
import Schedule from '../services/scheduleService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedules: [],
      scheduleDates: []
    }

    this.deleteNote = this.deleteNote.bind(this);

    this.createSchedule = this.createSchedule.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
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

  isLoggedIn() {
    if (localStorage.getItem('authToken') !== null) {
      if(localStorage.getItem('authToken') !== "undefined") {
        return true;
      }
    }
  }

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
