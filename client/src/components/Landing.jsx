import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
  return (
    <div>
      <h1>PlanAhead</h1>
      <Link to="/dashboard">View dashboard</Link>
    </div>
  )
}

export default Landing;
