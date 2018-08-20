import React from 'react';
import { Link } from 'react-router-dom';

function DailyMenu(props) {
  return (
    <nav className="daily-nav">
      <Link to={`/dashboard/daily/${props.date}/tasks`} className="daily-tasks">Tasks</Link>
      <Link to={`/dashboard/daily/${props.date}/events`} className="daily-events">Events</Link>
      <Link to={`/dashboard/daily/${props.date}/notes`} className="daily-notes">Notes</Link>
      <Link to={`/dashboard/daily/${props.date}/schedule`} className="daily-schedule">Schedule</Link>
    </nav>
  )
}

export default DailyMenu;
