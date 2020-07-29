import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Main from '../pages/Main';

it('should render Main component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Main)).toHaveLength(1);
});
