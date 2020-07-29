import React, { useState, useCallback, FormEvent } from 'react';
import { translate } from '../../services';

type FormatValue = (inputValue: string) => string;
type OnChange = (value: string) => void;

interface IExpiryDateField {
  position: number;
  formatValue: FormatValue;
  placeholder: string;
  onChange: OnChange;
}

export default function ExpiryDateField({
  position,
  formatValue,
  placeholder,
  onChange,
}: IExpiryDateField) {
  const [value, setValue] = useState('');

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      const result = formatValue(inputValue);
      setValue(result);

      if (onChange) {
        onChange(result);
      }
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
