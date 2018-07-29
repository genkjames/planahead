import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, removeError } from '../../store/actions/users';

import Form from './Form';

function Register(props) {
  props.history.listen(() => {props.removeError()})
  
  let errors;
  if (props.errors) {
    if (props.errors.message.length > 1) {
      errors = props.errors.message.map(error => {
        return <p key={error} className="errors">{error}</p>
      })
    } else {
      errors = <p className="errors">{props.errors.message}</p>
    }
  }

  return (
    <div className="user-forms">
      {errors}
      <Form
        label="Register"
        onSubmit={props.register}
        history={props.history}
      />
      <p>Already registered? Log in <Link to="/login">here</Link></p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    errors: state.users.error
  }
}

export default connect(mapStateToProps, { register, removeError })(Register);
