export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function dfsInorder(rootNode) {
  // 결과 배열 만들기
  const result = [];

  // 탐색용 재귀 helper 함수 만들기
  function traverse(node) {
    // rootNode.left 가 있다면,
    if (node.left) {
      // 재귀 호출하기
      traverse(node.left);
    }

    // rootNode.value 를 결과 배열에 push() 하기
    result.push(node.value);

    // rootNode.right 가 있다면,
    if (node.right) {
      // 재귀 호출하기
      traverse(node.right);
    }
  }

  // rootNode 를 사용하여, 재귀 helper 함수 호출하기
  traverse(rootNode);
  // 결봐 배열 반환하기
  return result;
};
