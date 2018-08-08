import React from 'react';
import Events from '../daily/events/View';

function EventView(props) {
  const events = props.events.map(event => {
    return (
      <Events 
        key={event.id}
        event={event}
        manipulate={false}
      />
    )
  })

  return (
    <div>
      {events}
    </div>
  )
}

export default EventView;