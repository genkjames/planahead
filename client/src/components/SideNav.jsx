import React from 'react';
import { Link } from 'react-router-dom';

function SideNav(props) {
  return (
    <div>
      <Link to="/dashboard">Monthly View</Link>
      <Link to="/dashboard/daily">Daily View</Link>
    </div>
  )
}

export default SideNav;
