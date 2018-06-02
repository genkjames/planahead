import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';

function Register(props) {
  return (
    <div className="user-forms">
      <Form
        label="Register"
        onSubmit={props.register}
      />
      <p>Already registered? Log in <Link to="/login">here</Link></p>
    </div>
  )
}

export default Register;
