import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';

class Notes extends Component {
  render() {
    return (
      <div className="notes">
        <DailyMenu />
        <h2>Notes</h2>
      </div>
    )
  }
}

export default Notes;
