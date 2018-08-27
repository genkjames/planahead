import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';

import { changeDate } from '../../store/actions/date';

class Daily extends Component {
  componentDidMount() {
    let date = this.props.dateObject(this.props.match.params.id);
    if (isNaN(Date.parse(date))) {
      date = new Date();

      this.props.history.push(`/dashboard/daily/${this.props.dateFormat(date)}`);
    }
    this.props.changeDate(date);
  }

  render() {
    const { tasks, events, notes, schedules, date, compareDate } = this.props;
    const viewTasks = tasks.filter(task => compareDate(task, date));
    const viewEvents = events.filter(event => compareDate(event,date));
    const viewNotes = notes.filter(note => compareDate(note, date));
    const viewSchedules = schedules.filter(schedule => compareDate(schedule, date));

    return (
      <div className="daily">
        <h1>{date.toDateString()}</h1>
        <Routes
          {...this.props}
          tasks={viewTasks}
          events={viewEvents}
          notes={viewNotes}
          schedules={viewSchedules}
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

export default withRouter(connect(mapStateToProps, { changeDate })(Daily));
