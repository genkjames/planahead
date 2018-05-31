import React from 'react';
import Form from './Form';

function Register(props) {
  return (
    <div>
      <h1>Register</h1>
      <Form
        label="Register"
        onSubmit={props.register}
      />
    </div>
  )
  }

export default Register;
