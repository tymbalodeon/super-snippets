import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ProjectList.css';

export default class ProjectList extends Component {
  renderProjects() {
    const { projects, updateProjectId } = this.props;
    return projects.map(project => (
      <li key={project.id}>
        <NavLink
          className="ProjectList__project-link"
          to={`/project/${project.id}`}
          onClick={() => updateProjectId(project.id)}
        >
          {project.title}
        </NavLink>
      </li>
    ));
  }

  render() {
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
  }
}
