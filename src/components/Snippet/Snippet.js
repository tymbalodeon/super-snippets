import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Snippet.css';

export default class Snippet extends Component {
  render() {
    const { snippet } = this.props;

    return (
      <div className="Snippet_wrapper">
        <Link to={`/snippet/${snippet.id}`}>
          <div className="Snippet__details">
            <div className="Snippet__text">
              <h2 className="Snippet__heading">{snippet.snippet_name}</h2>
              <p className="Snippet__description">{snippet.content}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
