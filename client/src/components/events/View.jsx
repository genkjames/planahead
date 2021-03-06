import React from 'react';
import EventView from '../views/EventView';

function View(props) {
  const { event, events, dateObject } = props;
  let date;

  if (event !== undefined) {
    date = dateObject(event).toDateString();
  }
  
  return (
    <div>
      <div className="container">
        <h2>{date}</h2>
        <EventView 
          events={events}
        />
      </div>
    </div>
  )
}

export default View;