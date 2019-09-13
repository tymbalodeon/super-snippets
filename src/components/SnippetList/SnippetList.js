import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';
import './SnippetList.css';
export default class List extends Component {
  renderSnippets() {
    const { snippets, project_id, updateSnippetId } = this.props;
    let finalList = snippets;
    if (project_id) {
      finalList = snippets.filter(snippet => snippet.project_id === project_id);
    }
    return finalList.map(snippet => (
      <Snippet
        key={snippet.id}
        snippet={snippet}
        updateSnippetId={updateSnippetId}
      />
    ));
  }

  render() {
    const { error } = this.props;
    return (
      <div className="SnippetList">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderSnippets()
        )}
      </div>
    );
  }
}
