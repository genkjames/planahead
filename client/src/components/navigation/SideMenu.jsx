import React from 'react';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

function SideMenu(props) {
  return (
    <div className="side-menu">
      <Link className="sm-head" to="/"><h1>PlanAhead</h1></Link>
      <SideNav />
    </div>
  )
}

export default SideMenu;
