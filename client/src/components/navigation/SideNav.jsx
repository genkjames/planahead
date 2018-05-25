import React from 'react';
import { Link } from 'react-router-dom';

function SideNav(props) {
  return (
    <div>
      <Link to="/dashboard">Monthly View</Link>
      <Link to="/dashboard/daily">Daily View</Link>
      <div className="daily-links">
        <Link to="/dashboard/daily/tasks">Tasks</Link>
        <Link to="/dashboard/daily/events">Events</Link>
        <Link to="/dashboard/daily/notes">Notes</Link>
        <Link to="/dashboard/daily/schedule">Schedule</Link>
      </div>
    </div>
  )
}

export default SideNav;
