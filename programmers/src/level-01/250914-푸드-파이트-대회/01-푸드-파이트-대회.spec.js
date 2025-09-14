import { solution } from './01-푸드-파이트-대회';

/**
food           result
[1, 3, 4, 6]   "1223330333221"
[1, 7, 1, 2]   "111303111"
 */

describe('250914 / 01-푸드-파이트-대회', () => {
  it('solution() === "1223330333221"', () => {
    const result = solution([1, 3, 4, 6]);
    expect(result).toBe('1223330333221');
  });

  it('solution() === "111303111"', () => {
    const result = solution([1, 7, 1, 2]);
    expect(result).toBe('111303111');
  });
});
