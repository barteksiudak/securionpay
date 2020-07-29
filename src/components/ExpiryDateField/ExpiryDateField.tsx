import React from 'react';
import { translate, formatExpiryDate } from '../../services';
import InputField from '../InputField';

interface IExpiryDateField {
  position: number;
}

export default function ExpiryDateField({ position }: IExpiryDateField) {
  return (
    <div className="expiry-date">
      <InputField
        position={position}
        placeholder={translate('MM / YY')}
        formatValue={formatExpiryDate}
        onChange={() => {}}
      />
    </div>
  );
}
