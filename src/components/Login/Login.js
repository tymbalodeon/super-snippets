import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './Login.css';

export default class Login extends Component {
  state = { error: null };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        const { history } = this.props;
        history.push('/');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">
          {error && <p className="red">{error.message}</p>}
        </div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <input
            type="text"
            name="user_name"
            id="LoginForm__user_name"
            required
          ></input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input
            type="password"
            name="password"
            id="LoginForm__password"
            required
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
