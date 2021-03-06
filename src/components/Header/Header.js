import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  handleLogoutClick = () => {
    const { history } = this.props;
    localStorage.removeItem('super-snippets-client-auth-token');
    history.push('/');
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/">Home</Link>
        <Link to="/snippets">Snippets</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    const loggedIn = localStorage.getItem('super-snippets-client-auth-token');
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to={loggedIn ? '/snippets' : '/'}>
              <span className="brackets">{'{ '}</span>
              <span className="super">Super</span>
              <span className="snippets">Snippets</span>
              <span className="brackets">{' }'}</span>
            </Link>
          </h1>
          {loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}

export default Header;
