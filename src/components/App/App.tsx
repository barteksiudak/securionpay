import React from 'react';
import { ValidationProvider } from '../../context';
import { Main } from '../../pages';

/**
 * in the future we will need some router config, etc.
 */
export default function App() {
  return (
    <ValidationProvider>
      <Main />
    </ValidationProvider>
  );
}
