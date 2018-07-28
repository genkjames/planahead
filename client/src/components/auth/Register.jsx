import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registering } from '../../store/actionTypes';

import Form from './Form';

function Register(props) {
  return (
    <div className="user-forms">
      {props.errorTwo &&
        <div>
          {props.errorTwo.message.map(error => {
            return <p key={error} className="errors">{error}</p>
          })}
        </div>
      }
      <Form
        label="Register"
        onSubmit={props.registering}
      />
      <p>Already registered? Log in <Link to="/login">here</Link></p>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    userTwo: reduxState.users.user,
    errorTwo: reduxState.users.error
  }
}

export default connect(mapStateToProps, { registering })(Register);
