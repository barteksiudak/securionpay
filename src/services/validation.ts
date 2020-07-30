export function validateCardNumber(value: string): boolean {
  return true;
}

export function validateExpiryDate(value: string): Date | false {
  const [mm, yy] = value.split(' / ');
  const month = parseInt(mm, 10);
  const year = parseInt(yy, 10);

  if (!month || !year || month > 12) {
    return false;
  }

  const fullYear = year + 2000;
  const lastDayOfMonth = new Date(fullYear, month, 0).getDate();

  if (month > lastDayOfMonth) {
    return false;
  }

  return new Date(fullYear, month);
}
