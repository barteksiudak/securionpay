import React from 'react';
import CardNumberField from '../CardNumberField';
import ExpiryDateField from '../ExpiryDateField';
import CVCField from '../CVCField';
import './CreditCard.scss';

export default function CreditCard() {
  return (
    <div className="credit-card">
      <div className="credit-card--body">
        <CardNumberField position={1} />
        <ExpiryDateField position={2} />
        <CVCField position={3} />
      </div>
    </div>
  );
}
