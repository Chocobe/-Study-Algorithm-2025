import { 
  PriorityQueue,
  WeightedGraph,
} from './01-dijkstra-lecture';

/**
 *      A --[4]-- B
 *     /           \
 *   [2]           [3]
 *  /                 \
 * C --[2]-- D --[3]-- E
 *  \        |        /
 *   [4]    [1]     [1]
 *     \     |     /
 *      ---- F ----
 */

describe('18-01-dijkstra-lecture', () => {
  describe('PriorityQueue', () => {
    it('PriorityQueue 의 enqueue(), dequeue() 를 사용할 수 있다.', () => {
      const queue = new PriorityQueue();

      queue
        .enqueue('E', 5)
        .enqueue('C', 3)
        .enqueue('A', 1)
        .enqueue('D', 4)
        .enqueue('F', 6)
        .enqueue('B', 2);

      const result1 = queue.dequeue();
      expect(result1).toEqual({ name: 'A', weight: 1 });

      const result2 = queue.dequeue();
      expect(result2).toEqual({ name: 'B', weight: 2 });

      const result3 = queue.dequeue();
      expect(result3).toEqual({ name: 'C', weight: 3 });

      const result4 = queue.dequeue();
      expect(result4).toEqual({ name: 'D', weight: 4 });

      const result5 = queue.dequeue();
      expect(result5).toEqual({ name: 'E', weight: 5 });

      const result6 = queue.dequeue();
      expect(result6).toEqual({ name: 'F', weight: 6 });
    });
  });

  describe('WeightedGraph', () => {
    it('WeightedGroup 의 addVertex() 를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      expect(graph.adjacencyList['A']).toEqual([]);

      graph.addVertex('B');
      expect(graph.adjacencyList['B']).toEqual([]);

      graph.addVertex('C');
      expect(graph.adjacencyList['C']).toEqual([]);
    });

    it('WeightedGraph 의 addVertex() 를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      graph.addEdge('A', 'B', 1);
      expect(graph.adjacencyList['A']).toEqual([
        { name: 'B', weight: 1 },
      ]);
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'A', weight: 1 },
      ])

      graph.addEdge('C', 'B', 3);
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'A', weight: 1 },
        { name: 'C', weight: 3 },
      ]);
      expect(graph.adjacencyList['C']).toEqual([
        { name: 'B', weight: 3 },
      ]);
    });

    it('WeightedGraph 의 removeEdge() 를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      graph.addEdge('A', 'B', 1);
      graph.addEdge('A', 'C', 2);
      graph.addEdge('C', 'B', 3);

      graph.removeEdge('A', 'B');
      expect(graph.adjacencyList['A']).toEqual([
        { name: 'C', weight: 2 },
      ]);
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'C', weight: 3 },
      ]);
    });

    it('WeightedGraph 의 removeVertex() 를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      graph.addEdge('A', 'B', 1);
      graph.addEdge('A', 'C', 2);
      graph.addEdge('C', 'B', 3);

      graph.removeVertex('A');
      expect(graph.adjacencyList['A']).toBeUndefined();
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'C', weight: 3 },
      ]);
      expect(graph.adjacencyList['C']).toEqual([
        { name: 'B', weight: 3 },
      ]);
    });

    it('WeightedGraph 의 dijkstra() 를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addVertex('F');

      graph.addEdge('A', 'B', 4);
      graph.addEdge('A', 'C', 2);

      graph.addEdge('B', 'E', 3);

      graph.addEdge('C', 'D', 2);
      graph.addEdge('C', 'F', 4);

      graph.addEdge('D', 'E', 3);
      graph.addEdge('D', 'F', 1);

      graph.addEdge('E', 'F', 1);

      const result = graph.dijkstra('A', 'E');
      expect(result).toEqual(['A', 'C', 'D', 'F', 'E']);
    });
  });
});
