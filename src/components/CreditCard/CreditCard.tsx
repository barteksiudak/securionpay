import React, { useCallback, createRef, useContext } from 'react';
import CardNumberField from '../CardNumberField';
import ExpiryDateField from '../ExpiryDateField';
import CVCField from '../CVCField';
import { ValidationContext } from '../../context';
import './CreditCard.scss';

export default function CreditCard() {
  const [{ errorMessage }] = useContext(ValidationContext);
  const refs = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];

  // todo - pass refs
  // const [cardNumberFieldRef, expiryDateFieldRef, cvcFieldRef] = refs;

  // todo
  const handleIsReady = useCallback(
    (position) => {
      const { current: currentRef } = refs[position];
      if (currentRef) {
        currentRef.focus();
      }
    },
    [refs]
  );

  return (
    <div className="credit-card-container">
      <div className="credit-card">
        <div className="credit-card--body">
          <CardNumberField position={1} onIsReady={handleIsReady} />
          <ExpiryDateField position={2} />
          <CVCField position={3} />
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}
