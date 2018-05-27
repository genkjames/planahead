import React, { Component } from 'react';
import DailyMenu from '../navigation/DailyMenu';

class Notes extends Component {
  render() {
    return (
      <div className="notes">
        <DailyMenu />
        <button>Add a Note</button>
      </div>
    )
  }
}

export default Notes;
