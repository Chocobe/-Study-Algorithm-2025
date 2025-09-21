import { solution } from './01-연속된-부분-수열의-합';

/**
sequence                k   result
[1, 2, 3, 4, 5]         7   [2, 3]
[1, 1, 1, 2, 3, 4, 5]   5   [6, 6]
[2, 2, 2, 2, 2]         6   [0, 2]
 */

describe('250921 / 01-연속된-부분-수열의-합', () => {
  it('solution() === [2, 3]', () => {
    const result = solution([1, 2, 3, 4, 5], 7);
    expect(result).toEqual([2, 3]);
  });

  it('solution() === [6, 6]', () => {
    const result = solution([1, 1, 1, 2, 3, 4, 5], 5);
    expect(result).toEqual([6, 6]);
  });

  it('solution() === [0, 2]', () => {
    const result = solution([2, 2, 2, 2, 2], 6);
    expect(result).toEqual([0, 2]);
  });
});
