import React from 'react';

function TopNav(props) {
  return (
    <div className="top-nav">
      <div className="auth-menu">
        <button className="links-auth" onClick={props.logout}>Logout</button>
      </div>
      <p>Hello, {props.user.username}</p>
    </div>
  )
}

export default TopNav;
