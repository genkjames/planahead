import React from 'react';
import { Link } from 'react-router-dom';

function AuthMenu(props) {
  const authLinks = props.user ? (
      <div>
        <button onClick={props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )

  return (
    <div>
      {authLinks}
    </div>
  )
}

export default AuthMenu;
