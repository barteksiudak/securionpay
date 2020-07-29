import React, { useCallback, useState, useMemo } from 'react';
import {
  translate,
  formatCardNumber as formatCardNumberService,
  getCardData,
} from '../../services';
import { DEFAULT_CARD_DATA } from '../../constants';
import InputField from '../InputField';
import './CardNumberField.scss';

interface ICardNumberField {
  position: number;
}

export default function CardNumberField({ position }: ICardNumberField) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardData, setCardData] = useState(DEFAULT_CARD_DATA);

  const handleChange = useCallback((value: string) => {
    setCardNumber(value);
    setCardData(getCardData(value) || DEFAULT_CARD_DATA);
  }, []);

  const formatCardNumber = useMemo(() => {
    const { maxCardNumberLength } = cardData;
    return formatCardNumberService(cardNumber, maxCardNumberLength);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardData]);

  return (
    <div className="card-number">
      <InputField
        position={position}
        placeholder={translate('Card number')}
        formatValue={formatCardNumberService}
        onChange={handleChange}
      />
    </div>
  );
}
