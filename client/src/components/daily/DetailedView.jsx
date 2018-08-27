import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TaskView from '../views/TaskView';
import EventView from '../views/EventView';
import NoteView from '../views/NoteView';

function DetailedView(props) {
  let content;
  const date = props.dateFormat(props.date);

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
      <Link to={`/dashboard/daily/${date}/${props.label.toLowerCase()}`} className="links">{props.content.length > 0 ? 'Manage' : 'Add'} {props.label}</Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    date: state.date.date
  }
}

export default connect(mapStateToProps, null)(DetailedView);