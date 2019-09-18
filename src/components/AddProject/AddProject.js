import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service.js';
import './AddProject.css';

export default class AddProject extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { title } = e.target;
    const { addProject } = this.props;
    SnippetApiService.postProject(title.value)
      .then(addProject)
      .then(() => {
        title.value = '';
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <section className="AddProject">
        <h2>Create a project</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="project-name-input">Name: </label>
            <input type="text" id="project-name-input" name="title" required />
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
