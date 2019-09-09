import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';
import './SnippetList.css';

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

export default class List extends Component {
  render() {
    return (
      <div className="SnippetList">
        {snippetList.map(snippet => (
          <Snippet key={snippet.id} snippet={snippet} />
        ))}
      </div>
    );
  }
}
