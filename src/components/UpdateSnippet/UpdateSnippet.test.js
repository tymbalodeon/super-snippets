import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UpdateSnippet from './UpdateSnippet';

describe.skip('<UpdateSnippet />', () => {
  const state = {
    snippet: { id: 1, title: 'title' }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<UpdateSnippet location={{ state }} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<UpdateSnippet location={{ state }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
