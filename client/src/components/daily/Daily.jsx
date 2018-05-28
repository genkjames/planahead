import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';
import Routes from './Routes';

class Daily extends Component {
  render() {
    return (
      <div className="daily">
        <TopNav />
        <h1>{this.props.date.toDateString()}</h1>
        <Routes
          onTask={this.props.onTask}
          deleteTask={this.props.deleteTask}
          date={this.props.date}
          tasks={this.props.tasks}
          dateFormat={this.props.dateFormat}
        />
      </div>
    )
  }
}

export default Daily;
