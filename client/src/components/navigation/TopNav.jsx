import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/users';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout()
    .then(this.props.history.push('/login'));
  }

  render() {
    return (
      <div className="top-nav">
        <div className="auth-menu">
          <button className="links-auth" onClick={this.handleClick}>Logout</button>
        </div>
        <p>Hello, {this.props.user.username}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { logout })(TopNav);
