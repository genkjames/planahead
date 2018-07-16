import React from 'react';
import { Link } from 'react-router-dom';
import TaskView from './TaskView';
import EventView from './EventView';
import NoteView from './NoteView';

function DetailedView(props) {
  let content;

  if (props.label === "Tasks") {
    content = <TaskView tasks={props.content} />
  } else if (props.label === "Events") {
    content = <EventView events={props.content} />
  } else {
    content = <NoteView notes={props.content} />
  }

  return (
    <div>   
      <h2>{props.label}</h2>
      {content}
      <Link to={`/dashboard/daily/${props.label.toLowerCase()}`} className="links">{props.content.length > 0 ? 'Manage' : 'Add'} {props.label}</Link>
    </div>
  )
}

export default DetailedView;