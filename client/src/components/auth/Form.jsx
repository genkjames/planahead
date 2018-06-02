import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.user);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          {this.props.label === "Register" && <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.user.username}
            />
          </div>}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.user.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password}
              minLength="8"
            />
          </div>
          {this.props.label === "Register" && <div>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              onChange={this.handleChange}
              value={this.state.user.password_confirmation}
              minLength="8"
            />
          </div>}
          <button value="submit" className="links">{this.props.label}</button>
        </form>
      </div>
    )
  }
}

export default Form;
