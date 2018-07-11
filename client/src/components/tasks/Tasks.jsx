import React, { Component } from 'react';
import TopNav from '../navigation/TopNav';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.sortByDate = this.sortByDate.bind(this);
  }

  sortByDate(a, b) {
    if (a.set_date < b.set_date) {
      return -1;
    }

    if (a.set_date > b.set_date) {
      return 1;
    }

    return 0;
  }

  render() {  
    return (
      <div className="all-tasks">
        <TopNav
          user={this.props.user}
          logout={this.props.logout}
        />
        <h1>Tasks</h1>
      </div>
    )
  }
}

export default Tasks;