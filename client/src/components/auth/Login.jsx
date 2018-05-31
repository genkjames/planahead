import React from 'react';
import Form from './Form';

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <Form
        label="Login"
        onSubmit={props.login}
      />
    </div>
  )
  }

export default Login;
