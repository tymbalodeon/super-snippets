import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SnippetDetail from './SnippetDetail';

describe('<SnippetDetail />', () => {
  const history = createMemoryHistory('/');
  const match = {
    params: {
      snippet_id: 1
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <SnippetDetail history={history} match={match} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <SnippetDetail history={history} match={match} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
