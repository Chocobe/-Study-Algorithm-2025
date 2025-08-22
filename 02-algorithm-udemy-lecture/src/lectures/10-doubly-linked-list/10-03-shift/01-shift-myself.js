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

  pop() {
    // this.length 가 0 이라면,
    if (!this.length) {
      // undefined 반환하기
      return undefined;
    }

    // tail 을 변수로 가져오기
    const targetNode = this.tail;
    // this.tail 을 tail.prev 로 변경하기
    this.tail = targetNode.prev;

    // tail 의 prev 가 있다면,
    if (targetNode.prev) {
      // tail 의 prev 의 next 를 null 로 변경하기
      targetNode.prev.next = null;
      // tail 의 prev 를 null 로 변경하기
      targetNode.prev = null;
    }

    // this.length -1
    this.length--;

    // this.length 가 0 이라면,
    if (!this.length) {
      // head 를 null 로 변경하기
      this.head = null;
    }

    // tail 반환하기
    return targetNode;
  }

  shift() {
    // this.length 가 0 이라면,
    if (!this.length) {
      // undefined 반환하기
      return undefined;
    }

    // this.head 를 targetNode 변수로 만들기
    const targetNode = this.head;
    // this.head 를 targetNode.next 로 변경하기
    this.head = targetNode.next;

    // targetNode 의 next 가 존재한다면,
    if (targetNode.next) {
      // targetNode.next.prev 를 null 로 변경하기
      targetNode.next.prev = null;
      // targetNode.next 를 null 로 변경하기
      targetNode.next = null;
    }

    // this.length -1
    this.length--;

    // this.length 가 0 이라면,
    if (!this.length) {
      // this.tail 을 null 로 변경하기
      this.tail = null;
    }

    // targetNode 반환하기
    return targetNode;
  }
};
