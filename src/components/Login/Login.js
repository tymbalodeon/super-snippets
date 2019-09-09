import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <form className="LoginForm">
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <input type="text" name="LoginForm__user_name" required></input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input type="password" name="LoginForm__password" required></input>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
