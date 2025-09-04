/**
 * 문제: _전력망을 둘로 나누기_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: 
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/86971?language=javascript
 * 
 * @param { number } n
 * @param { number[][] } wires
 * @returns { number }
 */
export function solution(n, wires) {
  // 인접 리스트 만들기
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  wires.forEach(([node1, node2]) => {
    adjacencyList[node1].push(node2);
    adjacencyList[node2].push(node1);
  });

  let answer = n;

  // wires 를 순회하며, (대상 wire 를 끊는 의미)
  for (const [startNode, cutNode] of wires) {
    // cut1 에서 시작하는 Tree 의 node 개수 세기
    const count1 = bfsCount(startNode, cutNode);
    const count2 = n - count1;
    // 나눠진 2개 Tree 의 node 개수 차이 구하기
    const diff = Math.abs(count1 - count2);
    // answer 보다 diff 가 더 작다면, answer 갱신하기
    answer = Math.min(answer, diff);
  }

  function bfsCount(start, cut) {
    let count = 0;
    const queue = [start];
    const visited = {};

    while (queue.length) {
      const node = queue.shift();
      
      if (visited[node]) continue;

      visited[node] = true;
      count++;

      for (const adjacencyNode of adjacencyList[node]) {
        if (
          (node === start && adjacencyNode === cut) ||
          (node === cut && adjacencyNode === start)
        ) {
          continue;
        }

        queue.push(adjacencyNode);
      }
    }

    return count;
  }

  // answer 반환하기
  return answer;
};
