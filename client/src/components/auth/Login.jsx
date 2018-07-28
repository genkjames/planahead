import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, removeError } from '../../store/actions/users';

import Form from './Form';

function Login(props) {
  props.history.listen(() => {props.removeError()});

  return (
    <div className="user-forms">
      {props.errorTwo && <p className="errors">{props.errorTwo.message}</p>}
      <Form
        label="Login"
        onSubmit={props.login}
        history={props.history}
      />
      <p>Not registered? Sign up <Link to="/register">here</Link></p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    errorTwo: state.users.error
  }
}

export default connect(mapStateToProps, { login, removeError })(Login);
