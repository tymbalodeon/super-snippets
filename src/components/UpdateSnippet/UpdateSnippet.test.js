import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import UpdateSnippet from './UpdateSnippet';
import testSeed from '../../test-seed';

describe('<UpdateSnippet />', () => {
  const state = {
    snippet: testSeed.makeSnippet()
  };
  const projects = testSeed.makeProjects();
  const history = createMemoryHistory('/');

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <UpdateSnippet
          location={{ state }}
          projects={projects}
          history={history}
        />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <UpdateSnippet
            location={{ state }}
            projects={projects}
            history={history}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
