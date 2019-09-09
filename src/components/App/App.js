import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import List from '../List/List';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <List />
      </main>
    );
  }
}
