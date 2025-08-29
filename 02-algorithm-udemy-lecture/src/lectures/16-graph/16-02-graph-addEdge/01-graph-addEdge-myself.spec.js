import { Graph } from './01-graph-addEdge-myself';

describe('16-02 / 01-graph-addEdge-myself', () => {
  it('Graph 의 addEdge() 메소드를 사용할 수 있다.', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B');
    expect(graph.adjacencyList['A']).toEqual(['B']);
    expect(graph.adjacencyList['B']).toEqual(['A']);

    graph.addEdge('A', 'C');
    expect(graph.adjacencyList['A']).toEqual(['B', 'C']);
    expect(graph.adjacencyList['C']).toEqual(['A']);

    graph.addEdge('D', 'E');
    expect(graph.adjacencyList['D']).toEqual(['E']);
    expect(graph.adjacencyList['E']).toEqual(['D']);
  });
});
