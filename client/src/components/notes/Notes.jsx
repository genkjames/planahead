import React from 'react';
import { connect } from 'react-redux';

function Notes(props) {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, null)(Notes);