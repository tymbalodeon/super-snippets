import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './ProjectList.css';

export default class ProjectList extends Component {
  state = {
    projects: [],
    error: null
  };

  componentDidMount() {
    SnippetApiService.getProjects()
      .then(res => this.setState({ projects: res }))
      .catch(err => this.setState({ err }));
  }

  renderProjects() {
    const { projects } = this.state;
    return projects.map(project => (
      <li key={project.id}>
        <NavLink
          className="ProjectList__project-link"
          to={`/project/${project.id}`}
        >
          {project.title}
        </NavLink>
      </li>
    ));
  }

  render() {
    const { error } = this.state;
    return (
      <div className="ProjectList">
        <ul className="ProjectList__list">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderProjects()
          )}
        </ul>
        <div className="ProjectList__button-wrapper">
          <button className="ProjectList__add-project-button">
            <Link to="/add-project">Create Project</Link>
          </button>
          <button className="ProjectList__add-snippet-button">
            <Link to="/add-snippet"> Create Snippet</Link>
          </button>
        </div>
      </div>
    );
  }
}
