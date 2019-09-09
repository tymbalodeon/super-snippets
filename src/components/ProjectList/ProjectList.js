import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ProjectList.css';

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

export default class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <ul className="ProjectList__list">
          {projects.map(project => (
            <li key={project.id}>
              <NavLink
                className="ProjectList__project-link"
                to={`/project/${project.id}`}
              >
                {project.project_name}
              </NavLink>
            </li>
          ))}
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
