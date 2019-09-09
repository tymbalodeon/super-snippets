import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
  render() {
    return (
      <form className="RegistrationForm">
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">Full name</label>
          <input
            type="text"
            name="RegistrationForm__full_name"
            required
          ></input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">User name</label>
          <input
            type="text"
            name="RegistrationForm__full_name"
            required
          ></input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">Password</label>
          <input
            type="password"
            name="RegistrationForm__full_name"
            required
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}
