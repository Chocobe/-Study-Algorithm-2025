import { Graph } from './01-graph-removeVertex-myself';

describe('16-04 / 01-graph-removeVertex-myself', () => {
  it('Graph 의 removeVertex() 메소드를 사용할 수 있다.', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('D', 'E');

    graph.removeVertex('A');
    expect(graph.adjacencyList['A']).toBeUndefined();
    expect(graph.adjacencyList['B']).toEqual([]);
    expect(graph.adjacencyList['C']).toEqual([]);
    expect(graph.adjacencyList['D']).toEqual(['E']);
    expect(graph.adjacencyList['E']).toEqual(['D']);

    graph.removeVertex('B');
    expect(graph.adjacencyList['B']).toBeUndefined();
    expect(graph.adjacencyList['C']).toEqual([]);
    expect(graph.adjacencyList['D']).toEqual(['E']);
    expect(graph.adjacencyList['E']).toEqual(['D']);

    graph.removeVertex('C');
    expect(graph.adjacencyList['C']).toBeUndefined();
    expect(graph.adjacencyList['D']).toEqual(['E']);
    expect(graph.adjacencyList['E']).toEqual(['D']);
  });
});
