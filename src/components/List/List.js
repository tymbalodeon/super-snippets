import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';

const snippetList = [
  {
    id: 1,
    name: 'Test Name',
    content: 'This is some awesome SuperCollider code.'
  },
  {
    id: 2,
    name: 'Test Name',
    content: 'This is some awesome SuperCollider code.'
  },
  {
    id: 3,
    name: 'Test Name',
    content: 'This is some awesome SuperCollider code.'
  }
];

export default class List extends Component {
  render() {
    return snippetList.map(snippet => (
      <Snippet key={snippet.id} snippet={snippet} />
    ));
  }
}
