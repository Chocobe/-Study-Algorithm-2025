/**
 * @param { number } start
 * @param { number[][] } graph
 * @returns { number[][] }
 */
export function bfsTemplate_levelSearch(start, graph) {
  // 1. 초기화
  const levels = [];
  const visited = Array(graph.length).fill(false);
  const queue = [];
  let head = 0;

  queue.push(start);
  visited[start] = true;

  // 2. queue 루프 진행
  while (head < queue.length) {
    const size = queue.length - head;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      // 3. 대상 노드 꺼내기
      const node = queue[head++];

      // 4. 대상 노드 처리하기
      currentLevel.push(node);

      // 5. 인접 노드 조건부 enqueue()
      for (const adjacencyNode of graph[node]) {
        if (!visited[adjacencyNode]) {
          visited[adjacencyNode] = true;
          queue.push(adjacencyNode);
        }
      }
    }

    levels.push(currentLevel);
  }

  return levels;
};
