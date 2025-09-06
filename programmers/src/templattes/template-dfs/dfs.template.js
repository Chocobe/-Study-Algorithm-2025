/**
 * @param { number } n
 * @param { number } start
 * @param { number[][] } edges
 * @returns { boolean }
 */
export function dfsTemplate(n, start, edges) {
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  edges.forEach(([n1, n2]) => {
    adjacencyList[n1].push(n2);
    adjacencyList[n2].push(n1);
  });

  const visited = Array(n + 1).fill(false);
  let count = 0;
  const result = [];

  function dfs(node) {
    visited[node] = true;
    count++;
    result.push(node);

    for (const nextNode of adjacencyList[node]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  }

  dfs(start);

  return count === n;
};
