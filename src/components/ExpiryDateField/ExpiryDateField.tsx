import React, { useState, useCallback, FormEvent } from 'react';
import { translate, expiryDate as formatExpiryDateValue } from '../../services';

interface IExpiryDateField {
  position: number;
}

export default function ExpiryDateField({ position }: IExpiryDateField) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      setValue(formatExpiryDateValue(inputValue));
    },
    []
  );

  return (
    <div className="expiry-date">
      <input
        pattern="[0-9/ ]*"
        tabIndex={position}
        type="text"
        placeholder={translate('MM / YY')}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
