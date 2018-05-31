import React from 'react';
import AuthMenu from './AuthMenu';

function TopNav(props) {
  return (
    <div className="top-nav">
      <AuthMenu
        user={props.user}
      />
      <p>Hello, User</p>
    </div>
  )
}

export default TopNav;
