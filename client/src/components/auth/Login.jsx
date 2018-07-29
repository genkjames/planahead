import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, removeError } from '../../store/actions/users';

import Form from './Form';

function Login(props) {
  props.history.listen(() => {props.removeError()});

  return (
    <div className="user-forms">
      {props.errors && <p className="errors">{props.errors.message}</p>}
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
    errors: state.users.error
  }
}

export default connect(mapStateToProps, { login, removeError })(Login);
