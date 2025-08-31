import { WeightedGraph } from './01-weighted-graph-myself';

describe('18-01 / 01-weighted-graph-myself', () => {
  it('addVertex() 메소드를 사용할 수 있다.', () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    expect(graph.adjacencyList['A']).toEqual([]);

    graph.addVertex('B');
    expect(graph.adjacencyList['B']).toEqual([]);

    graph.addVertex('C');
    expect(graph.adjacencyList['C']).toEqual([]);

    graph.addVertex('A');
    expect(graph.adjacencyList['A']).toEqual([]);
  });

  it('addEdge() 메소드를 사용할 수 있다.', () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B', 3);
    expect(graph.adjacencyList['A']).toEqual([
      { vertex: 'B', weight: 3 },
    ]);

    graph.addEdge('A', 'C', 7);
    expect(graph.adjacencyList['A']).toEqual([
      { vertex: 'B', weight: 3 },
      { vertex: 'C', weight: 7 },
    ]);

    graph.addEdge('C', 'B', 1);
    expect(graph.adjacencyList['C']).toEqual([
      { vertex: 'A', weight: 7 },
      { vertex: 'B', weight: 1 },
    ]);

    expect(graph.adjacencyList['B']).toEqual([
      { vertex: 'A', weight: 3 },
      { vertex: 'C', weight: 1 },
    ]);
  });

  it('removeEdge() 메소드를 사용할 수 있다.', () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'C', 7);
    graph.addEdge('C', 'B', 1);

    graph.removeEdge('A', 'B');
    expect(graph.adjacencyList['A']).toEqual([
      { vertex: 'C', weight: 7 },
    ]);
    expect(graph.adjacencyList['B']).toEqual([
      { vertex: 'C', weight: 1 },
    ]);

    graph.removeEdge('B', 'C');
    expect(graph.adjacencyList['B']).toEqual([]);
    expect(graph.adjacencyList['C']).toEqual([
      { vertex: 'A', weight: 7 },
    ]);
  });

  it('removeVertex() 메소드를 사용할 수 있다.', () => {
    const graph = new WeightedGraph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'C', 7);
    graph.addEdge('C', 'B', 1);

    graph.removeVertex('A');
    expect(graph.adjacencyList['A']).toBeUndefined();
    expect(graph.adjacencyList['B']).toEqual([
      { vertex: 'C', weight: 1 },
    ]);
    expect(graph.adjacencyList['C']).toEqual([
      { vertex: 'B', weight: 1 },
    ]);

    graph.removeVertex('C');
    expect(graph.adjacencyList['C']).toBeUndefined();
    expect(graph.adjacencyList['B']).toEqual([]);

    graph.removeVertex('B');
    expect(graph.adjacencyList['B']).toBeUndefined();
    expect(graph.adjacencyList).toEqual({});
  });
});
