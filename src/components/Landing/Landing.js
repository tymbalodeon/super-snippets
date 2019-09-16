import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  render() {
    const loggedIn = localStorage.getItem('super-snippets-client-auth-token');
    return (
      <section className="Landing">
        <h2>Welcome to SuperSnippets</h2>
        {loggedIn ? '' : <p>Please Login or Register above.</p>}
        <p>This is a description of the site.</p>
      </section>
    );
  }
}
