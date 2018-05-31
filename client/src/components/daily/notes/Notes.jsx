import React from 'react';
import DailyMenu from '../../navigation/DailyMenu';
import Routes from './Routes';
import Form from './Form';
import { Switch, Link, Route } from 'react-router-dom';

function Notes(props) {
  let notes;

  if(props.notes.length > 0) {
    notes = props.notes.filter(props.compareDate).map(note => {
      return (
        <Routes
          key={note.id}
          user={props.user}
          date={props.date}
          note={note}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      )
    })
  }

  return (
    <div className="notes">
      <DailyMenu />
      <div className="container">
        <Switch>
          <Route
            path="/dashboard/daily/notes/new"
            render={() => (
              <Form
                user={props.user}
                date={props.date}
                dateFormat={props.dateFormat}
                label="Add"
                onSubmit={props.onNote}
              />)}
          />
          <Route
            path="/dashboard/daily/notes"
            render={() => (
              <div className="add-new">
                <Link to="/dashboard/daily/notes/new" className="links">Add Note</Link>
              </div>
              )
            }
          />
        </Switch>
        {notes}
      </div>
    </div>
  )
}

export default Notes;
