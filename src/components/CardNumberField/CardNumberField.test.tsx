import React from 'react';
import { shallow } from 'enzyme';
import CardNumberField from './CardNumberField';
import InputField from '../InputField';

describe('CardNumberField', () => {
  const wrapper = shallow(
    <CardNumberField position={1} onIsReady={() => {}} />
  );

  it('should render CardNumberField component', () => {
    expect(wrapper.find('.card-number')).toHaveLength(1);
  });

  it('should have InputField', () => {
    expect(wrapper.find(InputField)).toHaveLength(1);
  });
});
