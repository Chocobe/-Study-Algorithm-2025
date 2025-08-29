import { Graph } from './01-graph-addVertex-myself';

describe('16-01 / 01-graph-addVertex-myself', () => {
  it('Graph 의 addVertex() 메소드를 사용할 수 있다.', () => {
    const graph = new Graph();

    graph.addVertex('hello');
    expect(graph.adjacencyList['hello']).toEqual([]);

    graph.addVertex('world');
    expect(graph.adjacencyList['world']).toEqual([]);

    graph.addVertex('miles');
    expect(graph.adjacencyList['miles']).toEqual([]);

    graph.adjacencyList['miles'].push('miles value');
    graph.addVertex('miles');
    expect(graph.adjacencyList['miles']).toEqual(['miles value']);
  });
});
