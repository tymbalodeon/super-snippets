import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './SnippetDetail.css';

export default class SnippetDetail extends Component {
  state = {
    snippet: {}
  };

  handleDelete = () => {
    const idToDelete = this.props.match.params.snippet_id;
    SnippetApiService.deleteSnippet(idToDelete);
    this.props.history.goBack();
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
        <div className="button-flex">
          <button className="button-detail">
            <Link to="#" onClick={this.props.history.goBack}>
              Back
            </Link>
          </button>
          <button className="button-detail">
            <Link
              to={{
                pathname: '/update',
                state: {
                  snippet: this.state.snippet
                }
              }}
            >
              Edit
            </Link>
          </button>
          <button className="button-detail-play">PLAY!</button>
          <button className="button-detail-delete" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
