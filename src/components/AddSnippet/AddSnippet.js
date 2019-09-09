import React, { Component } from 'react';

const projects = [
  {
    id: 1,
    project_name: 'Electroacoustic',
    description:
      'This is a collection of snippets for working with live acoustic performers.'
  },
  {
    id: 2,
    project_name: 'Experiments',
    description: 'These snippets are trying something new.'
  },
  {
    id: 3,
    project_name: 'Upcoming Concert',
    description: 'These snippets are for the upcoming concert.'
  }
];

export default class AddSnippet extends Component {
  render() {
    return (
      <section className="AddSnippet">
        <h2>Create a snippet</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="snippet-name-input">Name</label>
            <input type="text" id="snippet-name-input" name="snippet-name" />
          </div>
          <div className="field">
            <label htmlFor="snippet-content-input">Content</label>
            <textarea id="snippet-content-input" name="snippet-content" />
          </div>
          <div className="field">
            <label htmlFor="snippet-folder-select">Folder</label>
            <select id="snippet-folder-select" name="snippet-folder-id">
              <option value={null}>...</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.project_name}
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
