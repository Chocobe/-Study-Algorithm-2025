import { solution } from './01-완전범죄-dfs-시간초과';

/**
info	                     n   m    result
[[1, 2], [2, 3], [2, 1]]   4   4    2
[[1, 2], [2, 3], [2, 1]]   1   7    0
[[3, 3], [3, 3]]           7   1    6
[[3, 3], [3, 3]]           6   1    -1
 */

describe('250912 / 01-완전범죄', () => {
  it('solution() === 2', () => {
    const result = solution([[1, 2], [2, 3], [2, 1]], 4, 4);
    expect(result).toBe(2);
  });

  it('solution() === 0', () => {
    const result = solution([[1, 2], [2, 3], [2, 1]], 1, 7);
    expect(result).toBe(0);
  });

  it('solution() === 6', () => {
    const result = solution([[3, 3], [3, 3]], 7, 1);
    expect(result).toBe(6);
  });

  it('solution() === -1', () => {
    const result = solution([[3, 3], [3, 3]], 6, 1);
    expect(result).toBe(-1);
  });
});
