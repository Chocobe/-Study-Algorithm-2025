/**
 * 연습9: DLL(DoublyLinkedList) reverse - 연습
 * => reverse
 * => 이 함수는 DoublyLinkedList의 모든 노드를 역순으로 처리하고 목록을 반환해야 합니다.
 */

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
    // 새로운 Node 만들기
    const newNode = new Node(val);
    // this.tail 을 originTailNode 변수로 만들기
    const originTailNode = this.tail;

    // originTailNode 이 있다면,
    if (originTailNode) {
      // this.tail.next 를 newNode 로 변경하기
      originTailNode.next = newNode;
      // newNode.prev 를 originTailNode 로 변경하기
      newNode.prev = originTailNode;
    }
    // 아니라면,
    else {
      // this.head 를 newNode 로 변경하기
      this.head = newNode;
    }

    // this.tail 을 newNode 로 변경하기
    this.tail = newNode;
    // this.length +1
    this.length++;
    // this 반환하기
    return this;
  }

  unshift(val) {
    // 새로운 Node 생성하기
    const newNode = new Node(val);
    // this.head 를 originHeadNode 변수로 만들기
    const originHeadNode = this.head;

    // originHeadNode 가 있다면,
    if (originHeadNode) {
      // originHeadNode.prev 를 newNode 로 변경하기
      originHeadNode.prev = newNode;
      // newNode.next 를 originHeadNode 로 변경하기
      newNode.next = originHeadNode;
    }
    // 아니라면,
    else {
      // this.tail 을 newNode 로 변경하기
      this.tail = newNode;
    }

    // this.head 를 newNode 로 변경하기
    this.head = newNode;
    // this.length +1
    this.length++;
    // this 반환하기
    return this;
  }

  shift() {
    // this.length 가 없다면,
    if (!this.length) {
      // undefined 반환하기
      return undefined;
    }

    // this.head 를 targetNode 변수로 만들기
    const targetNode = this.head;

    // targetNode.next 가 있다면,
    if (targetNode.next) {
      // targetNode.next.prev 를 null 로 변경하기
      targetNode.next.prev = null;
    }

    // this.head 를 targetNode.next 로 변경하기
    this.head = targetNode.next;
    // targetNode.next 를 null 로 변경하기
    targetNode.next = null;
    // this.length -1
    this.length--;

    // this.length 가 없다면,
    if (!this.length) {
      // this.tail 을 null 로 변경하기
      this.tail = null;
    }

    // targetNode 반환하기
    return targetNode;
  }

  set(index, val) {
    // index < 0 또는 index >= this.index 라면,
    if (index < 0 || index >= this.length) {
      // false 반환하기
      return false;
    }

    // targetNode 변수 만들기
    let targetNode;

    // index > this.length / 2 라면,
    if (index > this.length / 2) {
      targetNode = this.tail;
      // this.tail 부터 찾기
      for (let i = this.length - 1; i > index; i--) {
        // 대상 Node 를 targetNode 에 저장하기
        targetNode = targetNode.prev;
      }
    }
    // 아니라면,
    else {
      targetNode = this.head;
      // this.head 부터 찾기
      for (let i = 0; i < index; i++) {
        // 대상 Node 를 targetNode 에 저장하기
        targetNode = targetNode.next;
      }
    }

    // targetNode.val 을 val 로 변경하기
    targetNode.val = val;
    // true 반환하기
    return true;
  }

  remove(index) {
    // index === 0 이라면,
    if (index === 0) {
      // shift() 반환하기
      return this.shift();
    }

    // index === this.length - 1 이라면,
    if (index === this.length - 1) {
      // pop() 반환하기
      return this.pop();
    }

    // index >= this.length 라면,
    if (index >= this.length) {
      // undefined 반환하기
      return undefined;
    }

    // targetNode 변수 만들기
    let targetNode;

    // index > this.length / 2 라면,
    if (index > this.length / 2) {
      // tail 부터 찾기
      targetNode = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        targetNode = targetNode.prev;
      }
    }
    // 아니라면,
    else {
      // head 부터 찾기
      targetNode = this.head;

      for (let i = 0; i < index; i++) {
        targetNode = targetNode.next;
      }
    }

    // targetNode.prev 가 있다면,
    if (targetNode.prev) {
      // targetNode.prev.next 를 targetNode.next 로 변경하기
      targetNode.prev.next = targetNode.next;
    }

    // targetNode.next 가 있다면,
    if (targetNode.next) {
      // targetNode.next.prev 를 targetNode.prev 로 변경하기
      targetNode.next.prev = targetNode.prev;
    }

    // this.length -1
    this.length--;
    // targetNode 반환하기
    return targetNode;
  }

  pop() {
    // this.length 가 없다면,
    if (!this.length) {
      // undefined 반환하기
      return undefined;
    }

    // this.tail 을 targetNode 변수로 만들기
    const targetNode = this.tail;

    // targetNode.prev 가 있다면,
    if (targetNode.prev) {
      // targetNode.prev.next 를 null 로 변경하기
      targetNode.prev.next = null;
    }

    // this.tail 을 targetNode.prev 로 변경하기
    this.tail = targetNode.prev;

    // targetNode.prev 를 null 로 변경하기
    targetNode.prev = null;

    // this.length -1
    this.length--;

    // this.length 가 없다면,
    if (!this.length) {
      // this.head 를 null 로 변경하기
      this.head = null;
    }

    // targetNode 반환하기
    return targetNode;
  }

  get(index) {
    // index < 0 또는 index >= this.length 라면,
    if (index < 0 || index >= this.length) {
      // null 반환하기
      return null;
    }

    // targetNode 변수 만들기
    let targetNode;

    // index < this.length / 2 라면,
    if (index < this.length / 2) {
      // this.tail 을 targetNode 에 저장하기
      targetNode = this.tail;

      // tail 부터 역순으로 targetNode 찾기
      for (let i = this.length - 1; i > index; i--) {
        targetNode = targetNode.prev;
      }
    }
    // 아니라면,
    else {
      // this.head 를 targetNode 에 저장하기
      targetNode = this.head;

      // head 부터 targetNode 찾기
      for (let i = 0; i < index; i++) {
        targetNode = targetNode.next;
      }
    }

    // targetNode 반환하기
    return targetNode;
  }

  insert(index, val) {
    // index < 0 또는 index > this.length 라면,
    if (index < 0 || index > this.length) {
      // false 반환하기
      return false;
    }

    // index === 0 이라면,
    if (index === 0) {
      // unshift() 호출하기
      this.unshift(val);
      // true 반환하기
      return true;
    }

    // index === this.length 라면,
    if (index === this.length) {
      // this.push() 호출하기
      this.push(val);
      // true 반환하기
      return true;
    }

    // 새로운 Node 생성하기
    const newNode = new Node(val);
    // get(index) 결과를 newNextNode 변수로 만들기
    const newNextNode = this.get(index);
    // newNextNode.prev 를 newPrevNode 변수로 만들기
    const newPrevNode = newNextNode.prev;
    // newNode.next 를 newNextNode 로 변경하기
    newNode.next = newNextNode;
    // newNode.prev 를 newPrevNode 로 변경하기
    newNode.prev = newPrevNode;
    // newNextNode.prev 를 newNode 로 변경하기
    newNextNode.prev = newNode;
    // newPrevNode.next 를 newNode 로 변경하기
    newPrevNode.next = newNode;
    // this.length +1
    this.length++;
    // true 반환하기
    return true;
  }

  reverse() {
    // this.length < 2 라면,
    if (this.length < 2) {
      // this 반환하기
      return this;
    }

    // this.head 를 현재 Node 변수로 저장하기
    let currentNode = this.head;
    // 원본 기준 prevNode 변수 만들기
    let originPrevNode = currentNode.prev;
    // 원본 기준 nextNode 변수 만들기
    let originNextNode = currentNode.next;

    // i = 1; i < this.length; i++ 순회하며,
    for (let i = 0; i < this.length; i++) {
      // currentNode.prev 를 originNextNode 로 변경하기
      currentNode.prev = originNextNode;
      // currentNode.next 를 originPrevNode 로 변경하기
      currentNode.next = originPrevNode;

      // originPrevNode 를 currentNode 로 변경하기
      originPrevNode = currentNode;
      // currentNode 를 originNextNode 로 변경하기
      currentNode = originNextNode;

      // originNextNode 가 있다면,
      if (originNextNode) {
        // originNextNode 를 originNextNode.next 로 변경하기
        originNextNode = originNextNode.next;
      }
    }

    // head, tail 스왑하기
    [this.head, this.tail] = [this.tail, this.head];

    // this 반환하기
    return this;
  }
};
