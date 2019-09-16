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
    const { snippets, projects, project_id, loggedIn } = this.state;
    return (
      <div className="App">
        <div className="App__projects">
          <Route
            path="/snippets"
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
            path="/snippet/:snippet_id"
            render={rprops => <SnippetDetail {...rprops} />}
          />
          <Route
            path="/snippets"
            render={() => (
              <SnippetList
                snippets={snippets}
                project_id={project_id}
                updateSnippetId={this.updateSnippetId}
                setProjects={this.setProjects}
                setSnippets={this.setSnippets}
                loggedIn={loggedIn}
              />
            )}
          />
          <Route
            path="/project/:project_id"
            render={() => (
              <SnippetList
                snippets={snippets}
                project_id={project_id}
                updateSnippetId={this.updateSnippetId}
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
              />
            )}
          />
        </main>
      </div>
    );
  }
}
