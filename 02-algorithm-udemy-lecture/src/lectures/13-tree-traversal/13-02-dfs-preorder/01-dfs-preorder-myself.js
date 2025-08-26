export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

/**
 * 
 * @param { Node } rootNode 
 * @returns { number[] }
 */
export function dfsPreorder_recursive(rootNode) {
  // 결과 배열 만들기
  const result = [];

  // 재귀 helper 함수 만들기
  function traverse(node) {
    // node 를 결과 배열에 추가하기
    result.push(node.value);

    // node.left 가 있다면,
    if (node.left) {
      // 재귀 호출하기
      traverse(node.left);
    }

    // node.right 가 있다면,
    if (node.right) {
      // 재귀 호출하기
      traverse(node.right);
    }
  }

  // rootNode 로 helper 함수 호출하기
  traverse(rootNode);
  // 결과 배열 반환하기
  return result;
};

/**
 * @param { Node } rootNode
 * @returns { number[] }
 */
export function dfsPreorder_stack(rootNode) {
  // 결봐 배열 만들기
  const result = [];
  // stack 변수 만들고, rootNode 넣기
  const stack = [rootNode];

  // while (stack.length) 순회하며,
  while (stack.length) {
    // stack.pop() 를 현재 변수로 만들기
    const currentNode = stack.pop();
    // currentNode.value 를 결과 배열에 추가하기
    result.push(currentNode.value);

    // currentNode.right 가 있다면,
    if (currentNode.right) {
      // stack 에 넣기
      stack.push(currentNode.right);
    }

    // currentNode.left 가 있다면,
    if (currentNode.left) {
      // stack 에 넣기
      stack.push(currentNode.left);
    }
  }

  // 결과 배열 반환하기
  return result;
};
