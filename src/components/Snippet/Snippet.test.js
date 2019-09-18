import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Snippet from './Snippet';
import testSeed from '../../test-seed';

describe('<Snippet />', () => {
  const snippet = testSeed.makeSnippet();

  it('renders without crashinS', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <Snippet snippet={snippet} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Snippet snippet={snippet} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
