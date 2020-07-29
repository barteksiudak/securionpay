import { cardNumber, expiryDate } from './format';

describe('format service', () => {
  describe('cardNumber', () => {
    it('should return empty string on empty value', () => {
      expect(cardNumber(' ')).toBe('');
    });

    it('should cut each character other than [0-9] and break a space every four characters', () => {
      expect(cardNumber('556fds a-dd4565dss45')).toBe('5564 5654 5');
      expect(cardNumber('abc443dfds8&*^%^dae=-762')).toBe('4438 762');
    });

    it('should return correct format of card number', () => {
      expect(cardNumber('uuu45248518566657845355744ddds')).toBe(
        '4524 8518 5666 5784'
      );
      expect(cardNumber('fdsafdsafdsfdsa44524574555542567522dd')).toBe(
        '4452 4574 5555 4256'
      );
      expect(cardNumber('0123 4567 8901 2345')).toBe('0123 4567 8901 2345');
    });
  });

  describe('expiryDate', () => {
    it('should return empty string on empty value', () => {
      expect(expiryDate(' ')).toBe('');
    });

    it('should return only month and / for clear month', () => {
      expect(expiryDate('55')).toBe('55 / ');
    });

    it('should cut /', () => {
      expect(expiryDate('55 /')).toBe('55');
    });

    it('should cut each character other than [0-9] and break a slash MM and YY', () => {
      expect(expiryDate('556fds a-dd4565dss45')).toBe('55 / 64');
      expect(expiryDate('abc443dfds8&*^%^dae=-762')).toBe('44 / 38');
    });
  });
});
