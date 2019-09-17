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
            <p className="Snippet__info">{this.state.snippet.info}</p>
            <div className="code">
              <code className="Snippet__content">
                {this.state.snippet.content}
              </code>
            </div>
          </div>
        </div>
        <button>
          <Link to="#" onClick={this.props.history.goBack}>
            Back to Snippet List
          </Link>
        </button>
        <button>
          <Link to="/update">Update Snippet</Link>
        </button>
        <button>PLAY!</button>
      </div>
    );
  }
}
