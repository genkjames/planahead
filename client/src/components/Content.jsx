import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Content(props) {
  return (
    <div className="landing-content">
      <div>
        <h2>Keep organized and Plan Ahead</h2>
        <p>More than ever it's critical to be organized in this fast paced society. With so much going on around you it is easy to forget any tasks, events or thoughts that need to be finished.</p>
        <p>With PlanAhead you will be able to:</p>
          <ul>
            <li>Keep track of tasks for a particular day</li>
            <li>Take note of any events coming</li>
            <li>Have a quick overview of the current month</li>
            <li>Take notes or write down anything worth remembering</li>
          </ul>
        <p>It's never too late to start planning and remembering your every move before you make a step.</p>
        {props.user.id ? (
            <Link className="links" to="/dashboard">View dashboard</Link>
          ) : (
            <div>
              <Link className="links" to="/register">Register</Link>
              <Link className="links" to="/login">Login</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Content);
