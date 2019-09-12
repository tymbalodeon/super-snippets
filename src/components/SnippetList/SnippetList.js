import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';
import SnippetApiService from '../../services/snippet-api-service';
import './SnippetList.css';
export default class List extends Component {
  state = {
    snippets: [],
    error: null
  };

  componentDidMount() {
    SnippetApiService.getSnippets()
      .then(res => this.setState({ snippets: res }))
      .catch(err => this.setState({ err }));
  }

  renderSnippets() {
    const { snippets } = this.state;
    return snippets.map(snippet => (
      <Snippet key={snippet.id} snippet={snippet} />
    ));
  }

  render() {
    const { error } = this.state;
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
