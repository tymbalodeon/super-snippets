import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import AddSnippet from './AddSnippet';
import testSeed from '../../test-seed';

describe.skip('<AddSnippet />', () => {
  const history = createMemoryHistory('/');
  const projects = testSeed.makeProjects();

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AddSnippet history={history} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    console.log(projects);
    const tree = renderer
      .create(
        <BrowserRouter>
          <AddSnippet history={history} projects={projects} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
