import React from 'react';
import NoteView from '../daily/NoteView';

function View(props) {
  const { note, notes, dateObject } = props;
  let date;

  if (note !== undefined) {
    date = dateObject({"set_date": note}).toDateString();
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