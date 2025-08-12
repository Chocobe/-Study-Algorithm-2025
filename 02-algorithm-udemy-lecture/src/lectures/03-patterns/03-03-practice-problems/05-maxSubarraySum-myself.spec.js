import { maxSubarraySum } from './05-maxSubarraySum-myself';

describe('03-03 / 05-maxSubarraySum-myself', () => {
  it ('maxSubarraySum([100, 200, 300, 400], 2) === 700', () => {
    const result = maxSubarraySum([100, 200, 300, 400], 2);

    expect(result);
  });

  it ('maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39', () => {
    const result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

    expect(result).toBe(39);
  });

  it ('maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 2', () => {
    const result = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);

    expect(result).toBe(5);
  });

  it ('maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5', () => {
    const result = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);

    expect(result).toBe(5);
  });

  it ('maxSubarraySum([2, 3], 3) === null', () => {
    const result = maxSubarraySum([2, 3], 3);

    expect(result).toBeNull();
  });
});
