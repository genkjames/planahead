import React from 'react';
import EventView from '../daily/EventView';

function View(props) {
  const { event, events, dateObject } = props;
  let date;

  if (event !== undefined) {
    date = dateObject({"set_date": event}).toDateString();
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