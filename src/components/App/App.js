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
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__projects">
          <ProjectList />
        </div>
        <main className="App__main">
          <header>
            <Header />
          </header>
          <Switch>
            <Route exact path={'/'} component={SnippetList} />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route path={'/snippet/:snippet_id'} component={SnippetDetail} />
            <Route path={'/project/:project_id'} component={SnippetList} />
            <Route path={'/add-project'} component={AddProject} />
            <Route path={'/add-snippet'} component={AddSnippet} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
