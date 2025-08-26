/**
 * NOTE: BFS (Breadth First Search : 너비 우선 탐색)
 * => rootNode 부터 sibling 을 순서대로 탐색하는 방식이다.
 */

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param { Node } rootNode
 * @return { number[] }
 */
export function bfs(rootNode) {
  // 결과 배열 만들기
  const result = [];
  // 작업 queue 만들고, 초기값을 rootNode 넣기
  const queue = [rootNode];

  // queue.length 가 있다면,
  while (queue.length) {
    // queue.shift() 를 현재 Node 변수로 만들기
    const currentNode = queue.shift();
    // 결과 배열에 currentNode.value push() 하기
    result.push(currentNode.value);

    // currentNode.left 가 있다면, queue.push() 하기
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    // currentNode.right 가 있다면, queue.push() 하기
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  // 결과 배열 반환하기
  return result;
};
