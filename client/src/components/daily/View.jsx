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
    <div className="container daily-view">  
      <div>   
        <h2>Tasks</h2>
        {tasks}
        <Link to="/dashboard/daily/tasks" className="links">{tasks.length > 0 ? 'Manage' : 'Add'} Tasks</Link>
      </div>
      <div>   
        <h2>Events</h2>
        {events}
        <Link to="/dashboard/daily/events" className="links">{events.length > 0 ? 'Manage' : 'Add'} Events</Link>
      </div>
      <div>   
        <h2>Notes</h2>
        {notes}
        <Link to="/dashboard/daily/notes" className="links">{notes.length > 0 ? 'Manage' : 'Add'} Notes</Link>
      </div>
    </div>
  )
}

export default View;