import React from 'react';
import { connect } from 'react-redux';

import View from './View';

function Notes(props) {
  const { notes, datesOf, dateObject, sortByDate } = props;

  const notesSortedByDate = notes.sort(sortByDate);

  const dates = datesOf(notesSortedByDate);
  
  const noteArrays = Object.keys(dates).map(date => {
    return (
      <View 
        key={date}
        note={date}
        notes={dates[date]}
        dateObject={dateObject}
      />
    )
  })

  return (
    <div className="all-notes">
      <h1>Notes</h1>
      {noteArrays}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, null)(Notes);