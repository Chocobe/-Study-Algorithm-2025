export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // 새로운 Node 생성하기
    const newNode = new Node(val);

    // head 가 없다면,
    if (!this.head) {
      // head 에 newNode 바인딩하기
      this.head = newNode;
      // tail 에 newNode 바인딩하기
      this.tail = newNode;
    }
    // head 가 있다면,
    else {
      // 기존 tail 의 next 를 newNode 로 변경하기
      this.tail.next = newNode;
      // tail 을 newNode 로 변경하기
      this.tail = newNode;
    }

    // 개수 +1
    this.length++;

    // instance 반환하기
    return this;
  }
}
