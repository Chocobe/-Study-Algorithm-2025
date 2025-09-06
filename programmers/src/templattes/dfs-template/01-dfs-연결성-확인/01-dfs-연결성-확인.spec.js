import { dfsTemplate_connected } from './01-dfs-연결성-확인';

describe('dfs-template / 01-dfs-연결성-확인', () => {
  it("dfsTemplate_connected() === true", () => {
    const n = 5;
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 4]
    ];
    expect(dfsTemplate_connected(n, edges, 0)).toBe(true);
  });

  it("dfsTemplate_connected() === false", () => {
    const n = 5;
    const edges = [
      [0, 1], [2, 3]
    ];
    expect(dfsTemplate_connected(n, edges, 0)).toBe(false);
  });
});