import React, { useCallback, useState, useMemo, useContext } from 'react';
import payment from 'payment';
import {
  translate,
  formatCardNumber as formatCardNumberService,
  getCardData,
} from '../../services';
import { images } from '../../utils';
import { DEFAULT_CARD_DATA } from '../../constants';
import InputField from '../InputField';
import './CardNumberField.scss';
import { ValidationContext, IValidationContext } from '../../context';

interface ICardNumberField {
  position: number;
  onIsReady: (position: number) => void;
}

export default function CardNumberField({
  position,
  onIsReady,
}: ICardNumberField) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardData, setCardData] = useState(DEFAULT_CARD_DATA);
  const [, setContext] = useContext(ValidationContext);

  const handleChange = useCallback((value: string) => {
    const currentCardData = getCardData(value) || DEFAULT_CARD_DATA;
    const { cvcLength } = currentCardData;
    setCardData(currentCardData);
    setCardNumber(value);
    setContext((state: IValidationContext) => ({
      ...state,
      cvcLength,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatCardNumber = useMemo(
    () => (value: string) =>
      formatCardNumberService(value, cardData.maxCardNumberLength),
    [cardData]
  );

  const isValid = useMemo(() => {
    const { maxCardNumberLength } = cardData;
    if (maxCardNumberLength === cardNumber.length) {
      const isValidNumber = payment.fns.validateCardNumber(cardNumber);

      if (isValidNumber) {
        onIsReady(position);
      }

      return isValidNumber;
    }

    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);

  const cardType = cardData.type as string;
  const imageSrc = images[cardType] ?? images.unknow;

  return (
    <div className="card-number">
      <img src={imageSrc} alt="card" />
      <InputField
        position={position}
        placeholder={translate('Card number')}
        formatValue={formatCardNumber}
        onChange={handleChange}
        errorMessageText="Card number is invalid"
        isValid={isValid}
      />
    </div>
  );
}
