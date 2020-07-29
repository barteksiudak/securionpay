import React, { useState, useCallback, FormEvent } from 'react';
import { translate, cardNumber as formatCardNumber } from '../../services';
import './CardNumberField.scss';

export default function CardNumberField() {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      setValue(formatCardNumber(inputValue));
    },
    []
  );

  return (
    <div className="card-number">
      <input
        type="text"
        placeholder={translate('Card number')}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
