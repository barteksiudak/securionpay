import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import { CreditCard } from '../../components';

describe('Main', () => {
  const wrapper = shallow(<Main />);

  it('should render Main component', () => {
    expect(wrapper.find('.main')).toHaveLength(1);
  });

  it('should render CreditCard component', () => {
    expect(wrapper.find(CreditCard)).toHaveLength(1);
  });
});
