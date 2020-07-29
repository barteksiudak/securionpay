import { CARD_TYPES } from '../constants';
import { ICardType } from '../types';

export default function getCardData(value: string): ICardType | null {
  return (
    CARD_TYPES.find(({ startPattern }) => startPattern.test(value)) ?? null
  );
}
