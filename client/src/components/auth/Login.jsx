import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function Login(props) {
  return (
    <div className="user-forms">
      {props.errors && <p className="errors">{props.errors.message}</p>}
      <Form
        label="Login"
        onSubmit={props.login}
      />
      <p>Not registered? Sign up <Link to="/register">here</Link></p>
    </div>
  )
}

export default Login;
