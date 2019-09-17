import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import SnippetList from '../SnippetList/SnippetList';
import ProjectList from '../ProjectList/ProjectList';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SnippetDetail from '../SnippetDetail/SnippetDetail';
import Landing from '../Landing/Landing';
import AddProject from '../AddProject/AddProject';
import AddSnippet from '../AddSnippet/AddSnippet';
import UpdateSnippet from '../UpdateSnippet/UpdateSnippet';
import './App.css';

export default class App extends Component {
  state = {
    snippets: [],
    projects: [],
    project_id: null,
    error: null
  };

  updateProjectId = project_id => this.setState({ project_id });

  setProjects = projects => this.setState({ projects });

  setSnippets = snippets => this.setState({ snippets });

  addProject = project => {
    this.setProjects([...this.state.projects, project]);
  };

  addSnippet = snippet => {
    this.setSnippets([...this.state.snippets, snippet]);
  };

  render() {
    const { snippets, projects, project_id } = this.state;
    return (
      <div className="App">
        <div className="App__projects">
          <Route
            path={[
              '/snippets',
              '/projects',
              '/add-snippet',
              '/add-project',
              '/update'
            ]}
            render={rprops => (
              <ProjectList
                {...rprops}
                projects={projects}
                updateProjectId={this.updateProjectId}
                setProjects={this.setProjects}
                setSnippets={this.setSnippets}
              />
            )}
          />
        </div>
        <main className="App__main">
          <header>
            <Route
              path="/"
              render={rprops => (
                <Header {...rprops} updateProjectId={this.updateProjectId} />
              )}
            />
          </header>

          <Route exact path="/" render={() => <Landing />} />
          <Route
            path={'/login'}
            render={rprops => <Login {...rprops} logIn={this.logIn} />}
          />
          <Route path={'/register'} component={Register} />
          <Route
            path="/snippets/:snippet_id"
            render={rprops => <SnippetDetail {...rprops} />}
          />
          <Route
            exact
            path="/snippets"
            render={() => (
              <SnippetList
                snippets={snippets}
                project_id={project_id}
                setProjects={this.setProjects}
                setSnippets={this.setSnippets}
              />
            )}
          />
          <Route
            path="/projects/:project_id"
            render={() => (
              <SnippetList
                snippets={snippets}
                project_id={project_id}
                setProjects={this.setProjects}
                setSnippets={this.setSnippets}
              />
            )}
          />
          <Route
            path="/add-project"
            render={() => <AddProject addProject={this.addProject} />}
          />
          <Route
            path="/add-snippet"
            render={rprops => (
              <AddSnippet
                {...rprops}
                addSnippet={this.addSnippet}
                projects={projects}
                setProjects={this.setProjects}
              />
            )}
          />
          <Route
            path="/update"
            render={rprops => (
              <UpdateSnippet
                {...rprops}
                addSnippet={this.addSnippet}
                projects={projects}
                setProjects={this.setProjects}
              />
            )}
          />
        </main>
      </div>
    );
  }
}
