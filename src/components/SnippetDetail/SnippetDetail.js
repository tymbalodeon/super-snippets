import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SnippetDetail.css';

const snippetList = [
  {
    id: 1,
    snippet_name: 'Additive Synth',
    content: 'This synth adds a bunch of sine waves together.',
    project_id: 1
  },
  {
    id: 2,
    snippet_name: 'Subtractive Synth',
    content: 'This synth applies a resonant filter to pink noise.',
    project_id: 2
  },
  {
    id: 3,
    snippet_name: 'Stochastic Synth',
    content: 'This synth uses randomness.',
    project_id: 1
  }
];

export default class SnippetDetail extends Component {
  render() {
    const snippet = snippetList[0];

    return (
      <div className="Snippet_wrapper">
        <div className="Snippet__details">
          <div className="Snippet__text">
            <h2 className="Snippet__heading">{snippet.snippet_name}</h2>
            <p className="Snippet__description">{snippet.content}</p>
          </div>
        </div>
        <button>
          <Link to={'/'} className="Snippet">
            Back to Snippet List
          </Link>
        </button>
      </div>
    );
  }
}
