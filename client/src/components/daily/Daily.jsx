import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';
import Routes from './Routes';

class Daily extends Component {
  render() {
    const tasks = this.props.tasks.filter(this.props.compareDate);
    const events = this.props.events.filter(this.props.compareDate);
    const notes = this.props.notes.filter(this.props.compareDate);
    const schedules = this.props.schedules.filter(this.props.compareDate);
    return (
      <div className="daily">
        <TopNav
          user={this.props.user}
          logout={this.props.logout}
        />
        <h1>{this.props.date.toDateString()}</h1>
        <Routes
          user={this.props.user}
          createTask={this.props.createTask}
          updateTask={this.props.updateTask}
          deleteTask={this.props.deleteTask}
          changeDate={this.props.changeDate}
          date={this.props.date}
          tasks={tasks}
          dateFormat={this.props.dateFormat}
          dateObject={this.props.dateObject}
          compareDate={this.props.compareDate}
          events={events}
          createEvent={this.props.createEvent}
          updateEvent={this.props.updateEvent}
          deleteEvent={this.props.deleteEvent}
          notes={notes}
          createNote={this.props.createNote}
          updateNote={this.props.updateNote}
          deleteNote={this.props.deleteNote}
          schedules={schedules}
          createSchedule={this.props.createSchedule}
          updateSchedule={this.props.updateSchedule}
          deleteSchedule={this.props.deleteSchedule}
        />
      </div>
    )
  }
}

export default Daily;
