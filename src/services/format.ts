export function formatCardNumber(value: string): string {
  if (!value) {
    return '';
  }
  return value
    .replace(/[^0-9]/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim()
    .substr(0, 19);
}

export function formatExpiryDate(value: string): string {
  if (!value) {
    return '';
  }

  const parsedValue = value.trim().replace(/[^0-9/]/g, '');
  const lastCharacter = parsedValue.substr(-1, 1);

  // let me remove slash on backspace
  if (parsedValue.length === 3 && lastCharacter === '/') {
    return parsedValue.substr(0, 2);
  }

  return parsedValue
    .replace('/', '')
    .replace(/([0-9]{2})(.*)/, '$1 / $2')
    .substr(0, 7);
}

export function formatCvc(value: string): string {
  if (!value) {
    return '';
  }

  return value.replace(/[^0-9]/g, '').substr(0, 3);
}
