import React from 'react';
import { translate, formatCardNumber } from '../../services';
import InputField from '../InputField';
import './CardNumberField.scss';

interface ICardNumberField {
  position: number;
}

export default function CardNumberField({ position }: ICardNumberField) {
  return (
    <div className="card-number">
      <InputField
        position={position}
        placeholder={translate('MM / YY')}
        formatValue={formatCardNumber}
      />
    </div>
  );
}
