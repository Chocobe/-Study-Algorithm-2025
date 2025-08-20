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

  pop() {
    // head 가 없다면,
    if (!this.head) {
      // undefined 반환하기
      return undefined;
    }

    // 이전 Node 변수 만들기
    let prev = this.head;
    // 현재 Node 변수 만들기
    let current = prev.next;

    // 현재 Node 의 next 가 존재할 때까지 순회하며,
    while (current?.next) {
      // 이전 Node 를 현재 Node 로 바꾸고,
      prev = current;
      // 현재 Node 를 현재 Node 의 next 로 바꾸기
      current = current.next;
    }

    // 개수 -1
    this.length--;

    // 현재 Node 가 있다면,
    if (current) {
      // 이전 Node 의 next 를 null 로 바꾸기
      prev.next = null;
      // tail 을 이전 Node 로 바꾸기
      this.tail = prev;
      // 현재 Node 반환하기
      return current;
    }
    // 아니라면,
    else {
      // head 를 null 로 변경하기
      this.head = null;
      // tail 을 null 로 변경하기
      this.tail = null;
      // 이전 Node 반화나하기
      return prev;
    }
  }
}
