import { solution } from './01-콜라-문제';

/**
a   b   n    result
2   1   20   19
3   1   20   9
 */

describe('250916 / 01-콜라-문제', () => {
  it('solution() === 19', () => {
    const result = solution(2, 1, 20);
    expect(result).toBe(19);
  });

  it('solution() === 9', () => {
    const result = solution(3, 1, 20);
    expect(result).toBe(9);
  });
});
