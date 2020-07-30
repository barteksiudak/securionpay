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
  UNKNOW = 'unknow',
}

export interface ICardType {
  type: CardType;
  format: RegExp;
  startPattern: RegExp;
  maxCardNumberLength: number;
  cvcLength: number;
}

export interface IDefaultCardType {
  type: CardType;
  maxCardNumberLength: number;
  cvcLength: number;
}
