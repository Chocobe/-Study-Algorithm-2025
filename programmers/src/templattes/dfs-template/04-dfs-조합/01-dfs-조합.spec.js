import { dfsTemplate_combination } from './01-dfs-조합';

/**
nums                       targetSum   k   result
[-2, 3, 0, 2, -5]          0           3   2
[-3, -2, -1, 0, 1, 2, 3]   0           3   5
[-1, 1, -1, 1]             0           3   0
 */

describe('dfs-template / 04-dfs-조합', () => {
  it('dfsTemplate_combination() === 2', () => {
    const result = dfsTemplate_combination([-2, 3, 0, 2, -5], 0, 3);
    expect(result).toBe(2);
  });

  it('dfsTemplate-combination() === 5', () => {
    const result = dfsTemplate_combination([-3, -2, -1, 0, 1, 2, 3], 0, 3);
    expect(result).toBe(5);
  });

  it('dfsTemplate_combination() === 0', () => {
    const result = dfsTemplate_combination([-1, 1, -1, 1], 0, 3);
    expect(result).toBe(0);
  });
});
