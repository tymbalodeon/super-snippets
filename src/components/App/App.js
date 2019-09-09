import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import SnippetList from '../SnippetList/SnippetList';
import ProjectList from '../ProjectList/ProjectList';
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
          <div className="App__snippet-list">
            <SnippetList />
          </div>
        </main>
      </div>
    );
  }
}
