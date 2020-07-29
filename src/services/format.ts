export function cardNumber(value: string): string {
  if (!value) {
    return '';
  }
  return value
    .replace(/[^0-9]/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim()
    .substring(0, 19);
}
