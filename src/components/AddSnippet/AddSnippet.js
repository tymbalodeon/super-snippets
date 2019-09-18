import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './AddSnippet.css';

export default class AddSnippet extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { title, info, content, project_id } = e.target;
    const newSnippet = {
      title: title.value,
      info: info.value,
      content: content.value,
      project_id: project_id.value
    };
    const { addSnippet } = this.props;
    let id;
    SnippetApiService.postSnippet(newSnippet)
      .then(res => (id = res.id))
      .then(addSnippet)
      .then(() => {
        title.value = '';
        info.value = '';
        content.value = '';
        project_id.value = null;
      })
      .then(() => this.props.history.push(`/snippets/${id}`))
      .catch();
  };

  componentDidMount() {
    SnippetApiService.getProjects()
      .then(res => this.props.setProjects(res))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { projects, error } = this.props;
    return (
      <section className="AddSnippet">
        <h2>Create a snippet</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="snippet-name-input">Name: </label>
            <input type="text" id="snippet-name-input" name="title" />
          </div>
          <div className="field">
            <label htmlFor="snippet-info-input">Description: </label>
            <input type="text" id="snippet-info-input" name="info" />
          </div>
          <div className="field">
            <label htmlFor="snippet-content-input">Content: </label>
            <textarea id="snippet-content-input" name="content" />
          </div>
          <div className="field">
            <label htmlFor="snippet-project-select">Project: </label>
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
            <Link to="#" onClick={this.props.history.goBack}>
              <button className="back">BACK</button>
            </Link>
            <button type="submit">ADD</button>
          </div>
        </form>
      </section>
    );
  }
}
