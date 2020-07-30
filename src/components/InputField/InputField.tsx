import React, { useState, useCallback, FormEvent, useContext } from 'react';
import { translate } from '../../services';
import { ValidationContext, IValidationContext } from '../../context';
import './InputField.scss';

type FormatValue = (inputValue: string, formatData?: unknown) => string;
type OnChange = (value: string) => void;

interface IExpiryDateField {
  position: number;
  formatValue: FormatValue;
  placeholder: string;
  onChange: OnChange;
  isValid?: boolean;
  errorMessageText?: string;
}

ExpiryDateField.defaultProps = {
  isValid: true,
  errorMessageText: '',
};

export default function ExpiryDateField({
  position,
  formatValue,
  placeholder,
  onChange,
  isValid,
  errorMessageText,
}: IExpiryDateField) {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const [, setErrorMessage] = useContext(ValidationContext);

  const updateErrorMessage = (hasErrorMessage: boolean): void => {
    setErrorMessage((state: IValidationContext) => ({
      ...state,
      errorMessage: hasErrorMessage ? translate(errorMessageText ?? '') : '',
    }));
  };

  const handleInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      const { value: inputValue } = e.target as HTMLInputElement;
      const result = formatValue(inputValue);
      setValue(result);
      setHasError(false);
      updateErrorMessage(false);

      if (onChange) {
        onChange(result);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formatValue]
  );

  const handleBlur = useCallback(() => {
    setHasError(!isValid);

    if (!isValid) {
      updateErrorMessage(!!value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, value]);

  return (
    <input
      className={hasError ? 'has-error' : ''}
      tabIndex={position}
      type="text"
      placeholder={translate(placeholder)}
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
}
