import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';
import Routes from './Routes';

class Daily extends Component {
  render() {
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
          tasks={this.props.tasks}
          dateFormat={this.props.dateFormat}
          dateObject={this.props.dateObject}
          compareDate={this.props.compareDate}
          events={this.props.events}
          createEvent={this.props.createEvent}
          updateEvent={this.props.updateEvent}
          deleteEvent={this.props.deleteEvent}
          notes={this.props.notes}
          createNote={this.props.createNote}
          updateNote={this.props.updateNote}
          deleteNote={this.props.deleteNote}
          schedules={this.props.schedules}
          createSchedule={this.props.createSchedule}
          updateSchedule={this.props.updateSchedule}
          deleteSchedule={this.props.deleteSchedule}
        />
      </div>
    )
  }
}

export default Daily;
