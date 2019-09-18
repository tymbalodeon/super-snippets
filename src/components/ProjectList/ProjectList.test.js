import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectList from './ProjectList';

describe('<ProjectList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProjectList />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<ProjectList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
