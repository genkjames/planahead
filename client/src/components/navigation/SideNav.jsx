import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SideNav(props) {
  const date = props.dateFormat(props.date);
  console.log(date);
  return (
    <nav className="side-nav">
      <Link to="/dashboard">Monthly View</Link>
      <Link to="/dashboard/daily">Daily View</Link>
      <div className="daily-links">
        <Link to={`/dashboard/daily/${date}/tasks`}>Tasks</Link>
        <Link to={`/dashboard/daily/${date}/events`}>Events</Link>
        <Link to={`/dashboard/daily/${date}/notes`}>Notes</Link>
        <Link to={`/dashboard/daily/${date}/schedule`}>Schedule</Link>
      </div>
      <Link to="/dashboard/tasks">Tasks</Link>
      <Link to="/dashboard/events">Events</Link>
      <Link to="/dashboard/notes">Notes</Link>
    </nav>
  )
}

function mapStateToProps(state) {
  return {
    date: state.date.date
  }
}

export default connect(mapStateToProps, null)(SideNav);
