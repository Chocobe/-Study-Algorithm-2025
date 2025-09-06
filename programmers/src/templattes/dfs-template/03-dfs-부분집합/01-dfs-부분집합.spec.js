import { dfsTemplate_subset } from './01-dfs-부분집합';

describe('dfs-template / 03-dfs-부분집합', () => {
  it('dfsTemplate_subset([1, 2, 3], 3) === 2', () => {
    const result = dfsTemplate_subset([1, 2, 3], 3);
    expect(result).toBe(2);
  });
});
