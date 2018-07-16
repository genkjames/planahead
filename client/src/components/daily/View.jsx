import React from 'react';
import DetailedView from './DetailedView';

function View(props) {
  return (
    <div className="container daily-view"> 
      <DetailedView 
        label="Tasks"
        content={props.tasks}
      />
      <DetailedView 
        label="Events"
        content={props.events}
      />
      <DetailedView 
        label="Notes"
        content={props.notes}
      />
    </div>
  )
}

export default View;