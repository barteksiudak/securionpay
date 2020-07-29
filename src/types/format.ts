export enum CardType {
  AMEX = 'amex',
  DANKORT = 'dankort',
  HIPERCARD = 'hipercard',
  DINERSCLUB = 'dinersclub',
  DISCOVER = 'discover',
  JCB = 'jcb',
  LASER = 'laser',
  MAESTRO = 'maestro',
  MASTERCARD = 'mastercard',
  UNIONPAY = 'unionpay',
  VISAELECTRON = 'visaelectron',
  ELO = 'elo',
  VISA = 'visa',
}

export interface ICardType {
  type: CardType;
  format: RegExp;
  startPattern: RegExp;
  maxCardNumberLength: number;
  cvcLength: number;
}

export interface IDefaultCardType {
  maxCardNumberLength: number;
  cvcLength: number;
}
