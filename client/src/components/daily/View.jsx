import React from 'react';
import { Link } from 'react-router-dom';
import Tasks from './tasks/View';
import Events from './events/View';
import Notes from './notes/View';

function View(props) {
  const tasks = props.tasks.map(task => {
    return (
      <Tasks 
        key={task.id}
        task={task}
        manipulate={false}
      />
    )
  })

  const events = props.events.map(event => {
    return (
      <Events 
        key={event.id}
        event={event}
        manipulate={false}
      />
    )
  })

  const notes = props.notes.map(note => {
    return (
      <Notes 
        key={note.id}
        note={note}
        manipulate={false}
      />
    )
  })

  return (
    <div>  
      <div>   
        <h2>Tasks</h2>
        {tasks}
        <Link to="/dashboard/daily/tasks">See Tasks</Link>
      </div>
      <div>   
        <h2>Events</h2>
        {events}
        <Link to="/dashboard/daily/events">See Events</Link>
      </div>
      <div>   
        <h2>Notes</h2>
        {notes}
        <Link to="/dashboard/daily/notes">See Notes</Link>
      </div>
    </div>
  )
}

export default View;