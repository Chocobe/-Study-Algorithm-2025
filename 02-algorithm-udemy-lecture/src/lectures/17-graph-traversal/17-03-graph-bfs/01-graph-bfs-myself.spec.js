import { Graph } from './01-graph-bfs-myself';

/**
 * @example
 *    A
 *  /   \
 * B     C
 * |     |
 * D --- E
 *  \   /
 *    F
 */

describe('17-01 / 01-graph-dfs-recursive-myself', () => {
  it('재귀로 구현한 dfsRecursive() 메소드를 사용할 수 있다.', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');

    const result = graph.bfs('A');
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
