import { minSubArrayLen } from './06-minSubArrayLen-myself';

describe('03-03 / 06-minSubArrayLen-myself', () => {
  it ('minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2', () => {
    const result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

    expect(result).toBe(2);
  });

  it ('minSubArrayLen([2, 1, 6, 5, 4], 9) === 2', () => {
    const result = minSubArrayLen([2, 1, 6, 5, 4], 9);

    expect(result).toBe(2);
  });

  it ('minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1', () => {
    const result = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);

    expect(result).toBe(1);
  });

  it ('minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3', () => {
    const result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);

    expect(result).toBe(3);
  });

  it ('minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5', () => {
    const result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);

    expect(result).toBe(5);
  });

  it ('minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0', () => {
    const result = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);

    expect(result).toBe(0);
  });
});
