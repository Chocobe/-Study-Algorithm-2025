/**
 * @param { number } start
 * @param { number[][] } graph
 * @returns { number }
 */
export function bfsTemplate_shortestPath(start, graph) {
  // 1. 초기화
  const distances = Array(graph.length).fill(-1);
  const queue = [];
  let head = 0;

  distances[start] = 0;
  queue.push(start);

  // 2. queue 루프 진행
  while (head < queue.length) {
    // 3. 대상 노드 꺼내기
    const node = queue[head++];

    // 4. 대상 노드 처리하기 (별도 처리가 필요없는 케이스)

    // 5. 인접 노드 조건부 enqueue()
    for (const nextNode of graph[node]) {
      if (distances[nextNode] < 0) {
        distances[nextNode] = distances[node] + 1;
        queue.push(nextNode);
      }
    }
  }

  return distances;
};
