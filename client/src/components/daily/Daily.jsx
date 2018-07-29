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
          history={this.props.history}
          changeDate={this.props.changeDate}
          date={this.props.date}
          dateFormat={this.props.dateFormat}
          dateObject={this.props.dateObject}
          tasks={tasks}
          events={events}
          notes={notes}
          schedules={schedules}
          createSchedule={this.props.createSchedule}
          updateSchedule={this.props.updateSchedule}
          deleteSchedule={this.props.deleteSchedule}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    events: state.events.events,
    notes: state.notes.notes
  }
}

export default withRouter(connect(mapStateToProps, null)(Daily));
