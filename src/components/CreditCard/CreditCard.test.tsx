import React from 'react';
import { shallow } from 'enzyme';
import CreditCard from './CreditCard';

describe('CreditCard', () => {
  it('should render CreditCard component', () => {
    const wrapper = shallow(<CreditCard />);

    expect(wrapper.find('.credit-card')).toHaveLength(1);
  });
});
