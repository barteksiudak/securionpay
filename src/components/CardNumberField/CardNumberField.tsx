import React, { useState, useCallback, FormEvent } from 'react';
import { translate, cardNumber as formatCardNumber } from '../../services';
import './CardNumberField.scss';

interface ICardNumberField {
  position: number;
}

export default function CardNumberField({ position }: ICardNumberField) {
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
        pattern="[0-9 ]*"
        tabIndex={position}
        type="text"
        placeholder={translate('Card number')}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
