import React from 'react';
import { Link } from 'react-router-dom';

function DailyMenu(props) {
  return (
    <nav>
      <Link to="/dashboard/daily">Tasks</Link>
      <Link to="/dashboard/daily/events">Events</Link>
      <Link to="/dashboard/daily/notes">Notes</Link>
      <Link to="/dashboard/daily/schedule">Schedule</Link>
    </nav>
  )
}

export default DailyMenu;
