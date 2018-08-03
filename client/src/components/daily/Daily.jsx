import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';

class Daily extends Component {
  render() {
    const tasks = this.props.tasks.filter(this.props.compareDate);
    const events = this.props.events.filter(this.props.compareDate);
    const notes = this.props.notes.filter(this.props.compareDate);
    const schedules = this.props.schedules.filter(this.props.compareDate);

    return (
      <div className="daily">
        <h1>{this.props.date.toDateString()}</h1>
        <Routes
          {...this.props}
          tasks={tasks}
          events={events}
          notes={notes}
          schedules={schedules}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    events: state.events.events,
    notes: state.notes.notes,
    schedules: state.schedules.schedules,
    date: state.date.date
  }
}

export default withRouter(connect(mapStateToProps, null)(Daily));
