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

  updateProjectId = project_id => {
    this.setState({ project_id });
  };

  componentDidMount() {
    // const snippetsPromise =
    SnippetApiService.getProjects()
      .then(res => this.setState({ projects: res }))
      .catch(error => this.setState({ error }));
    // const projectsPromise =
    SnippetApiService.getSnippets()
      .then(res => this.setState({ snippets: res }))
      .catch(error => this.setState({ error }));
    // Promise.all([snippetsPromise, projectsPromise]);
  }

  render() {
    const { snippets, projects, project_id, error } = this.state;
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
            <Header />
          </header>
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => (
                <SnippetList
                  snippets={snippets}
                  project_id={project_id}
                  error={error}
                />
              )}
            />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route path={'/snippet/:snippet_id'} component={SnippetDetail} />
            <Route
              path={'/project/:project_id'}
              render={() => (
                <SnippetList
                  snippets={snippets}
                  project_id={project_id}
                  error={error}
                />
              )}
            />
            <Route path={'/add-project'} component={AddProject} />
            <Route path={'/add-snippet'} component={AddSnippet} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
