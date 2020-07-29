import React from 'react';
import CardNumberField from '../CardNumberField';
import './CreditCard.scss';

export default function CreditCard() {
  return (
    <div className="credit-card">
      <div className="credit-card--body">
        <CardNumberField />
      </div>
    </div>
  );
}
