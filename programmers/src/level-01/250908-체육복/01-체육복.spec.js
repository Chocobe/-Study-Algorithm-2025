import { solution } from './01-체육복';

/**
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2
4	[2, 3]	[3, 4]	3
 */

describe('250908 / 01-체육복', () => {
  it('solution() === 5', () => {
    const result = solution(5, [2, 4], [1, 3, 5]);
    expect(result).toBe(5);
  });

  it('solution() === 4', () => {
    const result = solution(5, [2, 4], [3]);
    expect(result).toBe(4);
  });

  it('solution() === 2', () => {
    const result = solution(3, [3], [1]);
    expect(result).toBe(2);
  });

  it.only('solution() === 3', () => {
    const result = solution(4, [2, 3], [3, 4]);
    expect(result).toBe(3);
  });
});
