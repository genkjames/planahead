import React from 'react';
import NoteView from '../views/NoteView';

function View(props) {
  const { note, notes, dateObject } = props;
  let date;

  if (note !== undefined) {
    date = dateObject(note).toDateString();
  }

  return (
    <div className="container">
      <h2>{date}</h2>
      <NoteView 
        notes={notes}
      />
    </div>
  )
}

export default View;