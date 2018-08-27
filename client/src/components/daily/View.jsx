import React from 'react';
import DetailedView from './DetailedView';

function View(props) {
  return (
    <div className="container daily-view"> 
      <DetailedView 
        label="Tasks"
        content={props.tasks}
        dateFormat={props.dateFormat}
      />
      <DetailedView 
        label="Events"
        content={props.events}
        dateFormat={props.dateFormat}
      />
      <DetailedView 
        label="Notes"
        content={props.notes}
        dateFormat={props.dateFormat}
      />
    </div>
  )
}

export default View;