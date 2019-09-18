import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SnippetList from './SnippetList';

describe('<SnippetList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SnippetList />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<SnippetList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
