import React from 'react';

function View(props) {
  let date;

  if (props.date !== undefined) {
    date = props.dateObject({"set_date": props.date}).toDateString();
  }

  return (
    <div>
      <div className="container">
        <h2>{date}</h2>
        <p>{JSON.stringify(props.tasks)}</p>
      </div>
    </div>
  )
}

export default View;