/**
 * @param { number } n
 * @param { number[][] } edges
 * @param { number } start
 * @returns { boolean }
 */
export function dfsTemplate_connected(n, edges, start) {
  // 1. 초기화
  const adjacencyList = Array.from({ length: n }, () => []);
  edges.forEach(([n1, n2]) => {
    adjacencyList[n1].push(n2);
    adjacencyList[n2].push(n1);
  });

  const visited = Array(n).fill(false);
  let count = 0;

  function dfs(node) {
    // 2. (Base Case) - 별도 처리가 필요없는 케이스

    // 3. 현재 노드 처리하기
    visited[node] = true;
    count++;

    // 4. 인접 노드 조건부 재귀호출
    for (const nextNode of adjacencyList[node]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  }

  dfs(start);
  return count === n;
};
