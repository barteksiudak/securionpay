import React from 'react';
import { shallow } from 'enzyme';
import CardNumberField from './CardNumberField';
import { cardNumber } from '../../services';

enum MOCK {
  CARD_NUMBER = '1111 2222 3333 4444',
  PLACEHOLDER = 'placeholder',
}

jest.mock('../../services', () => ({
  cardNumber: jest.fn((arg) => arg),
  translate: () => MOCK.PLACEHOLDER,
}));

describe('CardNumberField', () => {
  const wrapper = shallow(<CardNumberField />);
  const inputElement = wrapper.find('input');

  it('should render CardNumberField component', () => {
    expect(wrapper.find('.card-number')).toHaveLength(1);
  });

  it('should have input field', () => {
    expect(inputElement).toHaveLength(1);
  });

  it('should format card number', () => {
    const mockedEvent = { target: { value: MOCK.CARD_NUMBER } };
    inputElement.simulate('change', mockedEvent);
    wrapper.update();

    expect(cardNumber).toHaveBeenCalledTimes(1);
    expect(cardNumber).toHaveBeenCalledWith(MOCK.CARD_NUMBER);
  });
});
