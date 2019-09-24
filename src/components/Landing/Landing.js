import React, { Component } from 'react';
import './Landing.css';

export default class NotFoundPage extends Component {
  render() {
    const loggedIn = localStorage.getItem('super-snippets-client-auth-token');
    return (
      <section className="Landing">
        <h2>Welcome to SuperSnippets</h2>
        {loggedIn ? (
          ''
        ) : (
          <p className="please-login">Please Login or Register above.</p>
        )}
        <p className="landing-p">
          This is a place to sketch, store, organize, and share musical ideas.
          Currently, users can create snippets, edit them, delete them, tag them
          by project and view them (either all or by project).
          {/* The goal is that
          snippets could eventually be run in the browser, perhaps using{' '}
          <a
            href="https://supercollider.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SuperCollider
          </a>{' '}
          to generate sound or{' '}
          <a
            href="http://lilypond.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LilyPond
          </a>{' '}
          to generate music notation in pdf form. */}
        </p>
        {loggedIn ? (
          ''
        ) : (
          <div className="test">
            <p className="test-text">Test out the site by logging in with:</p>
            <p className="demo">User name: demo</p>
            <p className="demo">Password: password</p>
          </div>
        )}
      </section>
    );
  }
}
