import React, { useState, useCallback, FormEvent } from 'react';
import { translate } from '../../services';

type FormatValue = (inputValue: string) => string;

interface IExpiryDateField {
  position: number;
  formatValue: FormatValue;
  placeholder: string;
}

export default function ExpiryDateField({
  position,
  formatValue,
  placeholder,
}: IExpiryDateField) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      setValue(formatValue(inputValue));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <input
      tabIndex={position}
      type="text"
      placeholder={translate(placeholder)}
      value={value}
      onChange={handleInputChange}
    />
  );
}
