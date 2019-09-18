import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UpdateSnippet from './UpdateSnippet';

describe.skip('<UpdateSnippet />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<UpdateSnippet />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<UpdateSnippet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
