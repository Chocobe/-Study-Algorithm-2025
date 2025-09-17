import { dfsTemplate_subset } from './01-dfs-조합-선택-비선택';

describe('dfs-template / 03-dfs-조합-선택-비선택', () => {
  it('dfsTemplate_subset([1, 2, 3], 3) === 2', () => {
    const result = dfsTemplate_subset([1, 2, 3], 3);
    expect(result).toBe(2);
  });
});
