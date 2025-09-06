/**
 * @param { number } n 노드개수
 * @param { number[][] } edges 간선정보
 * @param { number } start 시작 노드
 * @returns { boolean }
 */
export function bfsTemplate_connected(n, edges, start) {
  // 1. 초기화
  const adjacencyList = Array.from({ length: n }, () => []);
  edges.forEach(([n1, n2]) => {
    adjacencyList[n1].push(n2);
    adjacencyList[n2].push(n1);
  });

  const visited = Array(n).fill(false);
  const queue = [];
  let head = 0;
  let count = 0;

  queue.push(start);
  visited[start] = true;

  // 2. queue 루프 진행
  while (head < queue.length) {
    // 3. 대상 노드 꺼내기
    const node = queue[head++];

    // 4. 대상 노드 처리하기
    count++;

    // 5. 인접 노드 조건부 enqueue()
    for (const nextNode of adjacencyList[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }

  return count === n;
};
