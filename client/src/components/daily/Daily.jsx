import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';
import Routes from './Routes';

class Daily extends Component {
  render() {
    return (
      <div className="daily">
        <TopNav
          user={this.props.user}
        />
        <h1>{this.props.date.toDateString()}</h1>
        <Routes
          onTask={this.props.onTask}
          updateTask={this.props.updateTask}
          deleteTask={this.props.deleteTask}
          changeDate={this.props.changeDate}
          date={this.props.date}
          tasks={this.props.tasks}
          dateFormat={this.props.dateFormat}
          dateObject={this.props.dateObject}
          compareDate={this.props.compareDate}
          events={this.props.events}
          onEvent={this.props.onEvent}
          updateEvent={this.props.updateEvent}
          deleteEvent={this.props.deleteEvent}
        />
      </div>
    )
  }
}

export default Daily;
