import React from 'react';

function View(props) {
  return (
    <div>
      <div className="container">
        <h2>Date</h2>
        <p>{JSON.stringify(props.tasks)}</p>
      </div>
    </div>
  )
}

export default View;