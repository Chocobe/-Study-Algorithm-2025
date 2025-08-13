import { productOfArray } from './03-productOfArray-myself';

describe('04-02 / 03-productOfArray-myself', () => {
  it ('productOfArray([1, 2, 3]) === 6', () => {
    const result = productOfArray([1, 2, 3]);

    expect(result).toBe(6);
  });

  it ('productOfArray([1, 2, 3, 10]) === 60', () => {
    const result = productOfArray([1, 2, 3, 10]);

    expect(result).toBe(60);
  });
});
