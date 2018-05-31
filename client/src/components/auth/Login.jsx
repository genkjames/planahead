import React from 'react';
import Form from './Form';

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      {props.errors && <p>{props.errors.message}</p>}
      <Form
        label="Login"
        onSubmit={props.login}
      />
    </div>
  )
  }

export default Login;
