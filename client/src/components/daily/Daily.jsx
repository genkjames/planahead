import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';
import Routes from './Routes';

class Daily extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <h1>Daily</h1>
        <p>{this.props.date.toDateString()}</p>
        <Routes />
      </div>
    )
  }
}

export default Daily;
