import React from 'react';
import Notes from '../daily/notes/View';

function NoteView(props) {
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
      {notes}
    </div>
  )
}

export default NoteView;