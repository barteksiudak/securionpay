import React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

enum MOCK {
  VALUE = 'mocked value',
}

describe('InputField', () => {
  const formatValueMock = jest.fn((mock) => mock);
  const wrapper = shallow(
    <InputField position={1} formatValue={formatValueMock} placeholder="test" />
  );
  const inputElement = wrapper.find('input');

  it('should have input element', () => {
    expect(inputElement).toHaveLength(1);
  });

  it('should format value', () => {
    const mockedEvent = { target: { value: MOCK.VALUE } };
    inputElement.simulate('change', mockedEvent);

    expect(formatValueMock).toHaveBeenCalledTimes(1);
    expect(formatValueMock).toHaveBeenCalledWith(MOCK.VALUE);
  });
});
