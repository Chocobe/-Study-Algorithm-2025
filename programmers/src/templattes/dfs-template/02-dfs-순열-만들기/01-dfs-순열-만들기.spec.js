import { dfsTemplate_permutation } from './01-dfs-순열-만들기';

describe('dfs-template / 02-dfs-순열-만들기', () => {
  it('dfsTemplate_permutation()', () => {
    const result = dfsTemplate_permutation([1, 2, 3]);
    expect(result).toHaveLength(6);
    expect(result).toContainEqual([1, 2, 3]);
    expect(result).toContainEqual([3, 2, 1]);
  });
});
