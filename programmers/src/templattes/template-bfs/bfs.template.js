/**
 * BFS 를 사용하여, Graph/Tree 를 구성하는 모든 Node 방문가능 여부 검사하기
 * 
 * @example
 * n: 9
 * start:: 1
 * list: [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
 * 결과: true
 * 
 * @param { number } n Node 개수
 * @param { number? } start
 * @param { number[] } list 간선정보
 * @return { boolean }
 */
export function bfsTemplate(n, start, list) {
  // NOTE: 연산 흐름
  // 1. 간선정보 => 인접 리스트 로 정규화(Normalization) 하기
  // 2. start 를 시작점으로 BFS 전체 탐색 가능 여부 확인하기
  // 3. 결과 반환하기

  // NOTE: 필수 변수
  // global
  // - adjacencyList: 인접 리스트
  // - queue: 작업 node queue
  // - head: queue.shift() 대신 사용할 Index Pointer (인덱스 포인터)
  // - visited: 방문여부 기록
  // - result: 방문 Node 기록

  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  list.forEach(([n1, n2]) => {
    adjacencyList[n1].push(n2);
    adjacencyList[n2].push(n1);
  });

  const result = [];
  const visited = Array.from({ length: n + 1 }, (_, i) => start === i);
  const queue = [start];
  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    result.push(node);

    for (const nextNode of adjacencyList[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }

  return result.length === n;
};
