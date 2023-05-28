import { Price } from '../models/flight-search-response-model';

export const getDatesArray = (startDate: Date, offset = 1, interval = 1, arrayLength = 10) => {
  const res = [];
  const currentDate = new Date(startDate.setDate(startDate.getDate() - offset));

  while (res.length < arrayLength) {
    res.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + interval);
  }

  return res;
};

export const getDateWithOffset = (currentDate: string | undefined, offsetDays: number) => {
  if (!currentDate) return '';

  const newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() + offsetDays);

  return newDate.toISOString();
};

export function sumPrices(obj1: Price | undefined, obj2: Price | undefined) {
  const res: Price = { eur: 0, usd: 0, pln: 0, rub: 0 };

  if (!obj1 || !obj2) return res;

  for (const key in obj1) {
    if (
      Object.prototype.hasOwnProperty.call(obj1, key) &&
      Object.prototype.hasOwnProperty.call(obj2, key)
    ) {
      res[key as keyof Price] = obj1[key as keyof Price] + obj2[key as keyof Price];
    }
  }

  return res;
}

export function multiplyPrice(obj: Price | undefined, value: number) {
  const res = obj ? { ...obj } : undefined;
  for (const key in res) {
    if (Object.prototype.hasOwnProperty.call(res, key)) {
      res[key as keyof Price] *= value;
    }
  }
  return res;
}
