import { Money } from '../types';

export const currencyHelper = ({ currencyCode, amount }: Money) =>
  `${currencyCode} ${amount}`;
