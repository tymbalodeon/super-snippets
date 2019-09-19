import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';

export default class UpdateSnippet extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { title, info, content, project_id } = e.target;
    const { snippet } = this.props.location.state;

    const updatedSnippet = {
      title: title.value,
      info: info.value,
      content: content.value,
      project_id: project_id.value,
      date_created: snippet.date_created
    };

    const { updateSnippet } = this.props;
    const idToPut = snippet.id;

    SnippetApiService.putSnippet(updatedSnippet, idToPut)
      .then(updateSnippet)
      .then(() => {
        title.value = '';
        info.value = '';
        content.value = '';
        project_id.value = null;
      })
      .then(() => this.props.history.push(`/snippets/${idToPut}`))
      .catch();
  };

  componentDidMount() {
    SnippetApiService.getProjects()
      .then(res => this.props.setProjects(res))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { snippet } = this.props.location.state;
    const { projects, error } = this.props;
    return (
      <section className="AddSnippet">
        <h2>Edit Snippet</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="snippet-name-input">Name</label>
            <input
              type="text"
              id="snippet-name-input"
              name="title"
              defaultValue={snippet.snippet_name}
            />
          </div>
          <div className="field">
            <label htmlFor="snippet-info-input">Description</label>
            <input
              type="text"
              id="snippet-info-input"
              name="info"
              defaultValue={snippet.info}
            />
          </div>
          <div className="field">
            <label htmlFor="snippet-content-input">Content</label>
            <textarea
              id="snippet-content-input"
              name="content"
              defaultValue={snippet.content}
            />
          </div>
          <div className="field">
            <label htmlFor="snippet-project-select">Project</label>
            <select id="snippet-project-select" name="project_id">
              <option value={null}>--Choose A Project--</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <Link
              to="#"
              onClick={() =>
                this.props.history.replace(`/snippets/${snippet.id}`)
              }
            >
              <button>BACK</button>
            </Link>
            <button type="submit">EDIT</button>
          </div>
        </form>
      </section>
    );
  }
}
