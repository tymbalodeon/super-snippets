import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  // handleLogoutClick = () => {};

  // renderLogoutLink() {
  //   return (
  //     <div className="Header__logged-in">
  //       <Link onClick={this.handleLogoutClick} to="/">
  //         Logout
  //       </Link>
  //     </div>
  //   );
  // }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    const { updateProjectId } = this.props;
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/" onClick={() => updateProjectId()}>
              SuperSnippets
            </Link>
          </h1>
          <span className="Header__tagline--wide">Collide all the things.</span>
          {this.renderLoginLink()}
        </nav>
      </>
    );
  }
}

export default Header;
