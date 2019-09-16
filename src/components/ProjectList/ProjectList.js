import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './ProjectList.css';

export default class ProjectList extends Component {
  renderProjects() {
    const { projects, updateProjectId } = this.props;
    return projects.map(project => (
      <li key={project.id}>
        <NavLink
          className="ProjectList__project-link"
          to={`/projects/${project.id}`}
          onClick={() => updateProjectId(project.id)}
        >
          {project.title}
        </NavLink>
      </li>
    ));
  }

  componentDidMount() {
    if (localStorage.getItem('super-snippets-client-auth-token'))
      SnippetApiService.getProjects()
        .then(res => this.props.setProjects(res))
        .catch(error => console.log({ error }));
  }

  render() {
    if (localStorage.getItem('super-snippets-client-auth-token')) {
      return (
        <div className="ProjectList">
          <ul className="ProjectList__list">{this.renderProjects()}</ul>
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
    } else {
      return '';
    }
  }
}
