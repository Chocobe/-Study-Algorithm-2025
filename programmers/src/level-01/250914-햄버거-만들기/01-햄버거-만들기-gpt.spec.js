import { solution } from './01-햄버거-만들기-gpt';

/**
ingredient                    result
[2, 1, 1, 2, 3, 1, 2, 3, 1]   2
[1, 3, 2, 1, 2, 1, 3, 1, 2]   0
 */

describe('250914 / 01-햄버거-만들기-gpt', () => {
  it.only('solution() === 2', () => {
    const result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
    expect(result).toBe(2);
  });

  it('solution() === 0', () => {
    const result = solution([1, 3, 2, 1, 2, 1, 3, 1, 2]);
    expect(result).toBe(0);
  });
});
