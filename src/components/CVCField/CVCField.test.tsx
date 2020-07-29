import React from 'react';
import { shallow } from 'enzyme';
import CVCField from './CVCField';
import InputField from '../InputField';

describe('CVCField', () => {
  const wrapper = shallow(<CVCField position={1} />);

  it('should render CVCField component', () => {
    expect(wrapper.find('.cvc')).toHaveLength(1);
  });

  it('should have InputField', () => {
    expect(wrapper.find(InputField)).toHaveLength(1);
  });
});
