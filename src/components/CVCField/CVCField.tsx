import React from 'react';
import { translate, formatCvc } from '../../services';
import InputField from '../InputField';
import './CVCField.scss';

interface ICVCField {
  position: number;
}

export default function CVCField({ position }: ICVCField) {
  return (
    <div className="cvc">
      <InputField
        position={position}
        placeholder={translate('CVC')}
        formatValue={formatCvc}
        onChange={() => {}}
      />
    </div>
  );
}
