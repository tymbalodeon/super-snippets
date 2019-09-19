import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SnippetApiService from '../../services/snippet-api-service';
import './ProjectList.css';

export default class ProjectList extends Component {
  state = {
    project_id: this.props.project_id || ''
  };

  renderProjects() {
    const { projects, updateProjectId } = this.props;
    return (
      <div className="project-list-wrapper">
        <label htmlFor="snippet-project-select">Filter by Project: </label>
        <select
          id="snippet-project-select"
          name="project_id"
          onChange={e => updateProjectId(e.target.value)}
        >
          <option key="0" value={''}>
            --DISPLAY ALL--
          </option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </div>
    );
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
          {this.renderProjects()}
          <div className="ProjectList__button-wrapper">
            <Link to="/add-project">
              <button className="ProjectList__add-button">
                <span className="add-button">CREATE PROJECT</span>
              </button>
            </Link>
            <Link to="/add-snippet">
              <button className="ProjectList__add-button">
                <span className="add-button">CREATE SNIPPET</span>
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}
