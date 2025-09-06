import { bfsTemplate_shortestPath } from './01-bfs-최단거리-구하기';

describe('bfs-template / 01-bfs-최단거리-구하기', () => {
  it('bfsTemplate_shortestPath() === [0, 1, 2, 1, 2]', () => {
    // 0 - 1 - 2
    // |   |
    // 3 - 4
    const graph = [
      [1, 3],    // 0
      [0, 2, 4], // 1
      [1],       // 2
      [0, 4],    // 3
      [1, 3],    // 4
    ];

    const result = bfsTemplate_shortestPath(0, graph);
    expect(result).toEqual([0, 1, 2, 1, 2]);
  });
});
