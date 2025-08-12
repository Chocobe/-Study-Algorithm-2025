import { averagePair } from './03-averagePair-myself';

describe('03-03 / 03-averagePair-myself', () => {
  it ('averagePair([1, 2, 3], 2.5) === true', () => {
    const result = averagePair([1, 2, 3], 2.5);

    expect(result).toBe(true);
  });

  it ('averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true', () => {
    const result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

    expect(result).toBe(true);
  });

  it ('averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false', () => {
    const result = averagePair([-1, 0, 3, 4, 5, 6], 4.1);

    expect(result).toBe(false);
  });

  it ('averagePair([], 4) === false', () => {
    const result = averagePair([], 4);

    expect(result).toBe(false);
  });
});
