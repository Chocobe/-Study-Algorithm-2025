export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
};

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // 새로운 Node 생성하기
    const newNode = new Node(val);

    // this.length 가 없다면,
    if (!this.length) {
      // head 를 새로운 Node 로 변경하기
      this.head = newNode;
      // tail 을 새로운 Node 로 변경하기
      this.tail = newNode;
      // this.length +1
      this.length++;
      // this 반환하기
      return this;
    }

    // tail 의 next 를 새로운 Node 로 변경하기
    this.tail.next = newNode;
    // 새로운 Node 의 prev 를 tail 로 변경하기
    newNode.prev = this.tail;
    // tail 을 새로운 Node 로 변경하기
    this.tail = newNode;
    // length +1
    this.length++;

    // this 반환하기
    return this;
  }
};
