export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * @param { Node } rootNode 
 * @returns { number[] }
 */
export function dfsPostorder(rootNode) {
  // 결과 배열 만들기
  const result = [];

  // 탐색용 재귀 helper 함수 만들기
  function traverse(node) {
    // 현재 Node 의 left 가 있다면,
    if (node.left) {
      // 재귀 호출하기
      traverse(node.left);
    }

    // 현재 Node 의 right 가 있다면,
    if (node.right) {
      // 재귀 호출하기
      traverse(node.right);
    }

    // 현재 Node 의 value 를 결과 배열에 push() 하기
    result.push(node.value);
  }

  // 재귀 helper 함수 호출하기
  traverse(rootNode);
  // 결과 배열 반환하기
  return result;
};
