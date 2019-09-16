import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './SnippetDetail.css';

export default class SnippetDetail extends Component {
  state = {
    snippet: {}
  };

  componentDidMount() {
    SnippetApiService.getSnippet(this.props.match.params.snippet_id).then(
      snippet => this.setState({ snippet })
    );
  }

  render() {
    return (
      <div className="Snippet__detail__wrapper">
        <div className="Snippet__details">
          <div className="Snippet__text">
            <h2 className="Snippet__heading">
              {this.state.snippet.snippet_name}
            </h2>
            <p>{this.state.snippet.info}</p>
            <code className="Snippet__description">
              {this.state.snippet.content}
            </code>
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
