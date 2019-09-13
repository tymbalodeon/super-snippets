import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';
import './SnippetList.css';
export default class List extends Component {
  renderSnippets() {
    console.log(this.props.params);
    const { snippets } = this.props;
    const { project_id } = this.props;
    let finalList = snippets;
    if (project_id) {
      finalList = snippets.filter(snippet => snippet.project_id === project_id);
    }
    return finalList.map(snippet => (
      <Snippet key={snippet.id} snippet={snippet} />
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
