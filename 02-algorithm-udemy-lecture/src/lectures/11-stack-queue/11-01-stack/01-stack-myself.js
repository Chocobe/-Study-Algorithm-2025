export class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
};

export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    // 새로운 Node 를 만든다.
    const newNode = new Node(val);
    // newNode.prev 를 this.last 로 변경하기
    newNode.prev = this.last;

    // this.last 를 newNode 로 변경한다.
    this.last = newNode;

    // this.size 가 없다면,
    if (!this.size) {
      // this.first 를 newNode 로 변경하기
      this.first = newNode;
    }

    // this.size +1
    this.size++;

    // this.size 반환하기
    return this.size;
  }

  pop() {
    // this.size 가 없다면,
    if (!this.size) {
      // null 반환하기
      return null;
    }

    // this.last 를 targetNode 로 저장하기
    const targetNode = this.last;
    // this.last 를 targetNode.prev 로 변경하기
    this.last = targetNode.prev;
    // this.size -1
    this.size--;

    // this.size 가 없다면,
    if (!this.size) {
      // this.first 를 null 로 변경하기
      this.first = null;
    }

    // targetNode 반환하기
    return targetNode;
  }
};
