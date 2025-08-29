import { Graph } from './01-graph-removeEdge-myself';

describe('16-02 / 01-graph-addEdge-myself', () => {
  it('Graph 의 addEdge() 메소드를 사용할 수 있다.', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('D', 'E');

    graph.removeEdge('A', 'B');
    expect(graph.adjacencyList['A']).toEqual(['C']);
    expect(graph.adjacencyList['B']).toEqual([]);

    graph.removeEdge('E', 'D');
    expect(graph.adjacencyList['E']).toEqual([]);
    expect(graph.adjacencyList['D']).toEqual([]);
  });
});
