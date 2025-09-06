import { bfsTemplate_levelSearch } from './01-bfs-레벨-탐색';

describe("bfsLevel", () => {
  it("bfsTemplate_levelSearch() === [[0], [1, 3], [2, 4]]", () => {
    // 0 - 1 - 2
    // |       |
    // 3-------4
    const graph = [
      [1, 3],    // 0
      [0, 2],    // 1
      [1, 4],    // 2
      [0, 4],    // 3
      [2, 3],    // 4
    ];

    const result = bfsTemplate_levelSearch(0, graph);
    expect(result).toEqual([
      [0],       // level 0
      [1, 3],    // level 1
      [2, 4],    // level 2
    ]);
  });
});
