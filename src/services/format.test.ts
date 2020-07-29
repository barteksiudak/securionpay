import { formatCardNumber, formatExpiryDate, formatCvc } from './format';

describe('format service', () => {
  describe('formatCardNumber', () => {
    it('should return empty string on empty value', () => {
      expect(formatCardNumber(' ')).toBe('');
    });

    it('should cut each character other than [0-9] and break a space every four characters', () => {
      expect(formatCardNumber('556fds a-dd4565dss45')).toBe('5564 5654 5');
      expect(formatCardNumber('abc443dfds8&*^%^dae=-762')).toBe('4438 762');
    });

    it('should return correct format of card number', () => {
      expect(formatCardNumber('uuu45248518566657845355744ddds')).toBe(
        '4524 8518 5666 5784'
      );
      expect(formatCardNumber('fdsafdsafdsfdsa44524574555542567522dd')).toBe(
        '4452 4574 5555 4256'
      );
      expect(formatCardNumber('0123 4567 8901 2345')).toBe(
        '0123 4567 8901 2345'
      );
    });
  });

  describe('formatExpiryDate', () => {
    it('should return empty string on empty value', () => {
      expect(formatExpiryDate(' ')).toBe('');
    });

    it('should return only month and / for clear month', () => {
      expect(formatExpiryDate('55')).toBe('55 / ');
    });

    it('should cut /', () => {
      expect(formatExpiryDate('55 /')).toBe('55');
    });

    it('should cut each character other than [0-9] and break a slash MM and YY', () => {
      expect(formatExpiryDate('556fds a-dd4565dss45')).toBe('55 / 64');
      expect(formatExpiryDate('abc443dfds8&*^%^dae=-762')).toBe('44 / 38');
    });
  });

  describe('formatCvc', () => {
    it('should return empty string on empty value', () => {
      expect(formatCvc(' ')).toBe('');
    });

    it('should return only digits', () => {
      expect(formatCvc('55fdsa*&^*fds++++++')).toBe('55');
    });

    it('should return correct format', () => {
      expect(formatCvc('55fdsa*&^*fds+++4+++')).toBe('554');
      expect(formatCvc('4434')).toBe('443');
      expect(formatCvc('000')).toBe('000');
    });
  });
});
