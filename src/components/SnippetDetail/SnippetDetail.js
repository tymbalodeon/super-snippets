import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './SnippetDetail.css';

export default class SnippetDetail extends Component {
  state = {
    snippet: {}
  };

  componentDidMount() {
    const { snippet_id } = this.props.match.params;
    const id = Number(snippet_id);
    SnippetApiService.getSnippet(id).then(res =>
      this.setState({ snippet: res })
    );
  }

  render() {
    const { snippet } = this.state;
    return (
      <div className="Snippet_wrapper">
        <div className="Snippet__details">
          <div className="Snippet__text">
            <h2 className="Snippet__heading">{snippet.snippet_name}</h2>
            <p className="Snippet__description">{snippet.content}</p>
          </div>
        </div>
        <button>
          <Link to="#" onClick={this.props.history.goBack} className="Snippet">
            Back to Snippet List
          </Link>
        </button>
      </div>
    );
  }
}
