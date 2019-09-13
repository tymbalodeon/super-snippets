import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import SnippetList from '../SnippetList/SnippetList';
import ProjectList from '../ProjectList/ProjectList';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SnippetDetail from '../SnippetDetail/SnippetDetail';
import NotFoundPage from '../NotFound/NotFound';
import AddProject from '../AddProject/AddProject';
import AddSnippet from '../AddSnippet/AddSnippet';
import SnippetApiService from '../../services/snippet-api-service';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: [],
      projects: [],
      project_id: null,
      error: null
    };
  }

  updateProjectId = project_id => this.setState({ project_id });

  setProjects = projects => this.setState({ projects });

  setSnippets = snippets => this.setState({ snippets });

  addProject = project => {
    this.setProjects([...this.state.projects, project]);
  };

  addSnippet = snippet => {
    this.setSnippets([...this.state.snippets, snippet]);
  };

  componentDidMount() {
    SnippetApiService.getProjects()
      .then(res => this.setState({ projects: res }))
      .catch(error => this.setState({ error }));

    SnippetApiService.getSnippets()
      .then(res => this.setState({ snippets: res }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { snippets, projects, project_id } = this.state;
    return (
      <div className="App">
        <div className="App__projects">
          <ProjectList
            projects={projects}
            updateProjectId={this.updateProjectId}
          />
        </div>
        <main className="App__main">
          <header>
            <Header updateProjectId={this.updateProjectId} />
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <SnippetList
                  snippets={snippets}
                  project_id={project_id}
                  updateSnippetId={this.updateSnippetId}
                />
              )}
            />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route
              path="/snippet/:snippet_id"
              render={rprops => {
                return <SnippetDetail {...rprops} />;
              }}
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
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
