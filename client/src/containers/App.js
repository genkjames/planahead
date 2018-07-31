import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/auth';
import Service from '../services/authService';

class App extends Component {
  // Checks if user is still logged in
  isLoggedIn() {
    if (localStorage.getItem('authToken') !== null) {
      if(localStorage.getItem('authToken') !== "undefined") {
        return true;
      }
    }
  }

  componentDidMount() {
    if(Service.fetchToken() !== "undefined") {
      this.props.checkUser();
    }
  }

  render() {
    return (
      <div>
        <main>
          <Main isLoggedIn={this.isLoggedIn} />
        </main>
      </div>
    );
  }
}

export default connect(null, { checkUser })(App);
