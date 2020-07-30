import React, { useState, createContext, ReactNode } from 'react';
import { DEFAULT_CVC_LENGTH } from '../constants';

export interface IValidationContext {
  errorMessage?: string;
  cvcLength?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ValidationContext = createContext<[IValidationContext, any]>([
  {},
  () => {},
]);

interface IProps {
  children: ReactNode;
}

export function ValidationProvider({ children }: IProps) {
  const [state, setState] = useState<IValidationContext>({
    errorMessage: '',
    cvcLength: DEFAULT_CVC_LENGTH,
  });

  return (
    <ValidationContext.Provider value={[state, setState]}>
      {children}
    </ValidationContext.Provider>
  );
}
