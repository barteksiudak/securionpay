import React, { useState, useMemo } from 'react';
import {
  translate,
  formatExpiryDate,
  validateExpiryDate,
} from '../../services';
import InputField from '../InputField';

interface IExpiryDateField {
  position: number;
}

export default function ExpiryDateField({ position }: IExpiryDateField) {
  const [expiryDate, setExpiryDate] = useState<string>('');

  const isValid = useMemo(() => {
    const date = validateExpiryDate(expiryDate);
    if (!date) {
      return false;
    }

    return date > new Date();
  }, [expiryDate]);

  return (
    <div className="expiry-date">
      <InputField
        position={position}
        placeholder={translate('MM / YY')}
        formatValue={formatExpiryDate}
        onChange={(value: string) => {
          setExpiryDate(value);
        }}
        isValid={isValid}
        errorMessageText="Invalid expiry date field"
      />
    </div>
  );
}
