import React, { Component } from 'react';
import './Landing.css';

export default class NotFoundPage extends Component {
  render() {
    const loggedIn = localStorage.getItem('super-snippets-client-auth-token');
    return (
      <section className="Landing">
        <h2>Welcome to SuperSnippets</h2>
        {loggedIn ? '' : <p>Please Login or Register above.</p>}
        <p className="landing-p">
          This is a place to sketch, store, and organize musical ideas in the
          form of audio and notation, using{' '}
          <a
            href="https://supercollider.github.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SuperCollider
          </a>{' '}
          and{' '}
          <a
            href="http://lilypond.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LilyPond
          </a>
          , respectively. Sketch out your ideas, put them in a project folder,
          tag them by category, hit play to hear what they sound like, or
          engrave to see what it looks like!
        </p>
      </section>
    );
  }
}
