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
// import Route from '../Utils/Route';
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import './App.css';

export default class App extends Component {
  state = {
    snippets: [],
    projects: [],
    project_id: '',
    error: null
  };

  updateProjectId = project_id => {
    if (project_id === '') {
      this.setState({ project_id: '' });
    } else {
      this.setState({ project_id: Number(project_id) });
    }
  };

  setProjects = projects => this.setState({ projects });

  setSnippets = snippets => this.setState({ snippets });

  addProject = project => {
    this.setProjects([...this.state.projects, project]);
  };

  addSnippet = snippet => {
    this.setSnippets([...this.state.snippets, snippet]);
  };

  deleteSnippet = (id, history) => {
    this.setState(
      {
        snippets: this.state.snippets.filter(snippet => snippet.id !== id)
      },
      () => history.push('/snippets')
    );
  };

  render() {
    const { snippets, projects, project_id } = this.state;
    return (
      <div className="App">
        <header>
          <Route
            path="/"
            render={rprops => (
              <Header {...rprops} updateProjectId={this.updateProjectId} />
            )}
          />
        </header>

        <main className="App__main">
          <div className="App__projects">
            <Route
              exact
              path="/snippets"
              render={rprops => (
                <ProjectList
                  {...rprops}
                  projects={projects}
                  updateProjectId={this.updateProjectId}
                  setProjects={this.setProjects}
                  setSnippets={this.setSnippets}
                  project_id={project_id}
                />
              )}
            />
          </div>
          <Route exact path="/" render={() => <Landing />} />
          <Route
            path={'/login'}
            render={rprops => <Login {...rprops} logIn={this.logIn} />}
          />
          <Route path={'/register'} component={Register} />
          <Route
            path="/snippets/:snippet_id"
            render={rprops => (
              <SnippetDetail {...rprops} deleteSnippet={this.deleteSnippet} />
            )}
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
            render={rprops => (
              <AddProject {...rprops} addProject={this.addProject} />
            )}
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
