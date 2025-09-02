import { 
  PriorityQueue,
  WeightedGraph,
} from './03-dijkstra-myself';

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

describe('18-02 / 03-dijkstra-myself', () => {
  describe('PriorityQueue', () => {
    it('PriorityQueue 의 enqueue() 는 최소 weight node 를 반환한다.', () => {
      const queue = new PriorityQueue();

      queue.enqueue('A', 1);
      const result1 = queue.dequeue();
      expect(result1).toEqual({ name: 'A', weight: 1 });

      queue.enqueue('C', 3);
      queue.enqueue('B', 2);
      const result2 = queue.dequeue();
      expect(result2).toEqual({ name: 'B', weight: 2 });

      queue.enqueue('E', 5);
      queue.enqueue('F', 6);
      const result3 = queue.dequeue();
      expect(result3).toEqual({ name: 'C', weight: 3 });

      queue.enqueue('D', 4);
      const result4 = queue.dequeue();
      expect(result4).toEqual({ name: 'D', weight: 4 });

      const result5 = queue.dequeue();
      expect(result5).toEqual({ name: 'E', weight: 5 });

      const result6 = queue.dequeue();
      expect(result6).toEqual({ name: 'F', weight: 6 });
    });
  });

  describe('WeightedGraph', () => {
    it('WeightedGraph 의 addVertex() 메소드를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph.addVertex('A');
      expect(graph.adjacencyList['A']).toEqual([]);

      graph.addVertex('B');
      expect(graph.adjacencyList['B']).toEqual([]);

      graph.addVertex('C');
      expect(graph.adjacencyList['C']).toEqual([]);
    });

    it('WeightedGraph 의 addEdge() 메소드를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph
        .addVertex('A')
        .addVertex('B')
        .addVertex('C');

      graph.addEdge('A', 'B', 1);
      expect(graph.adjacencyList['A']).toEqual([
        { name: 'B', weight: 1 },
      ]);

      graph.addEdge('A', 'C', 2);
      expect(graph.adjacencyList['A']).toEqual([
        { name: 'B', weight: 1 },
        { name: 'C', weight: 2 },
      ]);
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'A', weight: 1 },
      ]);

      graph.addEdge('C', 'B', 3);
      expect(graph.adjacencyList['B']).toEqual([
        { name: 'A', weight: 1 },
        { name: 'C', weight: 3 },
      ]);
      expect(graph.adjacencyList['C']).toEqual([
        { name: 'A', weight: 2 },
        { name: 'B', weight: 3 },
      ]);
    });

    it('WeightedGraph 의 dijkstra() 메소드를 사용할 수 있다.', () => {
      const graph = new WeightedGraph();

      graph
        .addVertex('A')
        .addVertex('B')
        .addVertex('C')
        .addVertex('D')
        .addVertex('E')
        .addVertex('F')

      graph
        .addEdge('A', 'B', 4)
        .addEdge('A', 'C', 2)
        .addEdge('B', 'E', 3)
        .addEdge('C', 'D', 2)
        .addEdge('C', 'F', 4)
        .addEdge('D', 'E', 3)
        .addEdge('D', 'F', 1)
        .addEdge('E', 'F', 1);

      const result = graph.dijkstra('A', 'E');
      expect(result).toEqual(['A', 'C', 'D', 'F', 'E']);
    });
  });
});
