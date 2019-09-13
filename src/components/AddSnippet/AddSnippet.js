import React, { Component } from 'react';
import SnippetApiService from '../../services/snippet-api-service';

export default class AddSnippet extends Component {
  state = {
    projects: [],
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, info, content, project_id } = e.target;
    const newSnippet = {
      title: title.value,
      info: info.value,
      content: content.value,
      project_id: project_id.value,
      user_id: 1
    };
    SnippetApiService.postSnippet(newSnippet)
      // .then(this.context.addSnippet)
      .then(() => {
        title.value = '';
        info.value = '';
        content.value = '';
        project_id.value = null;
      })
      .catch();
  };

  componentDidMount() {
    SnippetApiService.getProjects()
      .then(res => this.setState({ projects: res }))
      .catch(err => this.setState({ err }));
  }

  render() {
    const { projects, error } = this.state;
    return (
      <section className="AddSnippet">
        <h2>Create a snippet</h2>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="snippet-name-input">Name</label>
            <input type="text" id="snippet-name-input" name="title" />
          </div>
          <div className="field">
            <label htmlFor="snippet-info-input">Description</label>
            <input type="text" id="snippet-info-input" name="info" />
          </div>
          <div className="field">
            <label htmlFor="snippet-content-input">Content</label>
            <textarea id="snippet-content-input" name="content" />
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
            <button type="submit">Add snippet</button>
          </div>
        </form>
      </section>
    );
  }
}