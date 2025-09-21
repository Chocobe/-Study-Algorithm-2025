import { solution } from './01-나머지가-1이-되는-수-찾기';

/**
n    result
10   3
12   11
 */

describe('250921 / 01-나머지가-1이-되는-수-찾기', () => {
  it('solution() === 3', () => {
    const result = solution(10);
    expect(result).toBe(3);
  });

  it('solution() === 11', () => {
    const result = solution(12);
    expect(result).toBe(11);
  });
});
