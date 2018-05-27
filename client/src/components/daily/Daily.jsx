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
          date={this.props.date}
        />
      </div>
    )
  }
}

export default Daily;
