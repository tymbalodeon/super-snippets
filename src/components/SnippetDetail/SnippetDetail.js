import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './SnippetDetail.css';

export default class SnippetDetail extends Component {
  state = {
    snippet: {},
    project: {}
  };

  handleDelete = () => {
    const idToDelete = this.props.match.params.snippet_id;
    const { deleteSnippet } = this.props;
    SnippetApiService.deleteSnippet(idToDelete)
      .then(deleteSnippet(idToDelete))
      .then(this.props.history.push('/snippets'));
  };

  componentDidMount() {
    SnippetApiService.getSnippet(this.props.match.params.snippet_id)
      .then(snippet => {
        this.setState({ snippet });
        return snippet.project_id;
      })
      .then(id =>
        id
          ? SnippetApiService.getProject(id).then(project =>
              this.setState({ project })
            )
          : this.setState({ project: null })
      );
  }

  render() {
    const { snippet, project } = this.state;

    return (
      <div className="Snippet__detail__wrapper">
        <div className="Snippet__details">
          <div className="Snippet__text">
            <h2 className="Snippet__heading">{snippet.snippet_name}</h2>
            {project && (
              <p className="Snippet__project">Project: {project.title}</p>
            )}
            <p className="Snippet__info">{snippet.info}</p>

            <div className="code">
              <code className="Snippet__content">{snippet.content}</code>
            </div>
          </div>
        </div>
        <div className="button-flex">
          <button className="button-detail-back">
            <Link to="/snippets">BACK</Link>
          </button>
          <button className="button-detail-edit">
            <Link
              to={{
                pathname: '/update',
                state: {
                  snippet: snippet
                }
              }}
            >
              EDIT
            </Link>
          </button>
          <button className="button-detail-play">PLAY</button>
          <button className="button-detail-delete" onClick={this.handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}
