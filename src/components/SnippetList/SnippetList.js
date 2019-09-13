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
      .catch(error => this.setState({ error }));
  }

  renderSnippets() {
    const { snippets } = this.state;
    const { project_id } = this.props.match.params;
    let finalList = snippets;
    if (project_id) {
      finalList = snippets.filter(snippet => snippet.project_id === project_id);
    }
    return finalList.map(snippet => (
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

// client side validation rather than server
// loading sign for registration and login
// remove register and create log out for logged in state
