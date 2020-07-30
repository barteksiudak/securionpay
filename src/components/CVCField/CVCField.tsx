import React, { useContext, useMemo, useState } from 'react';
import { translate, formatCvc } from '../../services';
import InputField from '../InputField';
import './CVCField.scss';
import { ValidationContext } from '../../context';

interface ICVCField {
  position: number;
}

export default function CVCField({ position }: ICVCField) {
  const [cvc, setCvc] = useState('');
  const [{ cvcLength }] = useContext(ValidationContext);

  const isValid = useMemo(() => cvcLength === cvc.length, [cvc, cvcLength]);
  return (
    <div className="cvc">
      <InputField
        position={position}
        placeholder={translate('CVC')}
        formatValue={formatCvc}
        onChange={setCvc}
        errorMessageText="Invalid CVC"
        isValid={isValid}
      />
    </div>
  );
}
