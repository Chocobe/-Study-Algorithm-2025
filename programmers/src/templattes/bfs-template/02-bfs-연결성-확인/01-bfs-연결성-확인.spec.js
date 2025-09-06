import { bfsTemplate_connected } from './01-bfs-연결성-확인';

describe('bfs-template / 02-bfs-연결성-확인', () => {
  it("bfsTemplate_connected() === true", () => {
    const n = 5;
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 4]
    ];
    expect(bfsTemplate_connected(n, edges, 0)).toBe(true);
  });

  it("bfsTemplate_connected() === false", () => {
    const n = 5;
    const edges = [
      [0, 1], [2, 3]
    ];
    expect(bfsTemplate_connected(n, edges, 0)).toBe(false);
  });
});
