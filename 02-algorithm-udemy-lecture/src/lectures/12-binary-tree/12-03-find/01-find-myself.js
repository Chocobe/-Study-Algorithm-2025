export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // 새로운 Node 만들기
    const newNode = new Node(val);

    // this.root 가 없다면,
    if (!this.root) {
      // this.root 를 newNode 로 변경하기
      this.root = newNode;
      // this 반환하기
      return this;
    }

    // 현재 Node 변수 만들기
    let currentNode = this.root;

    // while 순회하며,
    while (true) {
      // val === currentNode.value 라면,
      if (val === currentNode.value) {
        // NOTE: 이미 존재하는 값을 insert() 한 경우,
        // NOTE => value 의 빈도수를 증가 시키는 것 처럼 원하는 기능을 구현해도 된다.
        // NOTE => 여기서는 insert() 동작을 멈추고, undefined 를 반환하도록 구현했다.
        // undefined 반환하기
        return undefined;
      }

      // val > currentNoee.value 라면,
      if (val > currentNode.value) {
        // currentNode.right 가 없다면,
        if (!currentNode.right) {
          // currentNode.right 를 newNode 로 변경하기
          currentNode.right = newNode;
          // this 반환하기
          return this;
        }

        // currentNode 를 currentNode.right 로 변경하기
        currentNode = currentNode.right;
      }
      // 아니라면,
      else if (val < currentNode.value) {
        // currentNode.left 가 없다면,
        if (!currentNode.left) {
          // currentNode.left 를 newNode 로 변경하기
          currentNode.left = newNode;
          // this 반환하기
          return this;
        }

        // currentNode 를 currentNode.left 로 변경하기
        currentNode = currentNode.left;
      }
    }
  }

  find(val) {
    // this.root 가 없다면,
    if (!this.root) {
      // null 반환하기
      return null;
    }

    // this.root 를 currentNode 변수로 만들로
    let currentNode = this.root;

    // while (true) 순회하며,
    while (true) {
      // val === currentNode.value 라면,
      if (val === currentNode.value) {
        // currentNode 반환하기
        return currentNode;
      }

      // val > currentNode.value 라면,
      if (val > currentNode.value) {
        // currentNode.right 가 없다면,
        if  (!currentNode.right) {
          // null 반환하기
          return null;
        }

        // currentNode 를 currentNode.right 로 변경하기
        currentNode = currentNode.right;
      }
      // val < currentNode.value 라면,
      else {
        // currentNode.left 가 없다면,
        if (!currentNode.left) {
          // null 반환하기
          return null;
        }

        // currentNode 를 currentNode.left 로 변경하기
        currentNode = currentNode.left;
      }
    }
  }
};
