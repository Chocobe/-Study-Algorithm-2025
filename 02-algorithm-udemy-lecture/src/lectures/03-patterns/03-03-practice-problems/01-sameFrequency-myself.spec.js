import { sameFrequency } from './01-sameFrequency-myself';

describe('03-03-practice-problems / 01-sameFrequency', () => {
  it ('sameFrequency(182, 281) === true', () => {
    const result = sameFrequency(182, 281);

    expect(result).toBe(true);
  });

  it ('sameFrequency(34, 14) === false', () => {
    const result = sameFrequency(34, 14);

    expect(result).toBe(false);
  });

  it ('sameFrequency(3589578, 5879385) === true', () => {
    const result = sameFrequency(3589578, 5879385);

    expect(result).toBe(true);
  });

  it ('sameFrequency(22, 222) === false', () => {
    const result = sameFrequency(22, 222);

    expect(result).toBe(false);
  });
});
