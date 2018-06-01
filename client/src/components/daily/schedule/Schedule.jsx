import React from 'react';
import DailyMenu from '../../navigation/DailyMenu';
import Form from './Form';

function Schedule(props) {
  function timeFormat(num, i) {
    if(i === 0) {
      return "12:00 AM"
    } else if (i === 12) {
      return "12:00 PM"
    } else if (i > 12) {
      return `${i -= 12}:00 PM`;
    } else {
      return `${i}:00 AM`;
    }
  }

  const times = Array(24).fill(0).map(timeFormat).map(time => {
    return (
      <Form
        key={time}
        user={props.user}
        date={props.date}
        dateFormat={props.dateFormat}
        time={time}
      />
    )
  })
  return (
    <div className="schedule">
      <DailyMenu />
      <div className="container schedule-table">
        {times}
      </div>
    </div>
  )
}

export default Schedule;
