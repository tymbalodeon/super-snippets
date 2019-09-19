import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './Register.css';

export default class Register extends Component {
  state = { error: null };

  validatePassword = password => {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]/;
    if (password.length < 8) {
      return 'Password must be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password must be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain 1 upper case, lower case, number and special character';
    }
    return null;
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push('/login');
  };

  handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, user_name, password } = e.target;

    const passwordError = this.validatePassword(password.value);

    if (passwordError) {
      this.setState({ error: passwordError });
      return;
    }

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value
    })
      .then(() => {
        first_name.value = '';
        last_name.value = '';
        user_name.value = '';
        password.value = '';
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        <div className="first_name">
          <label htmlFor="RegistrationForm__first_name">First name: </label>
          <input
            type="text"
            name="first_name"
            id="RegistrationForm__first_name"
            required
          ></input>
        </div>
        <div className="last_name">
          <label htmlFor="RegistrationForm__last_name">Last name: </label>
          <input
            type="text"
            name="last_name"
            id="RegistrationForm__last_name"
            required
          ></input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">User name: </label>
          <input
            type="text"
            name="user_name"
            id="RegistrationForm__user_name"
            required
          ></input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">Password: </label>
          <input
            type="password"
            name="password"
            id="RegistrationForm__password"
            required
          ></input>
        </div>
        <button type="submit">REGISTER</button>
      </form>
    );
  }
}
