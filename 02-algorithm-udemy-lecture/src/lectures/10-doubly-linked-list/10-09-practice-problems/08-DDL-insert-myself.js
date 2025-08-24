/**
 * 연습8: Doubly Linked Lists insert / remove - Exercise
 * => DoublyLinkedList 클래스에서 다음을 구현하세요.
 * 
 * => insert
 * => 이 내부/헬퍼 함수는 DoublyLinkedList의 지정된 인덱스에 노드를 삽입해야 합니다. 
 * => 인덱스가 유효하면 true를 반환하고 인덱스가 유효하지 않은 경우(0보다 작거나 목록 길이보다 큰 경우) false를 반환해야 합니다.
 * 
 * => remove
 * => 이 함수는 DoublyLinkedList의 지정된 인덱스에서 노드를 제거해야 합니다.
 * => 인덱스가 유효하면 제거된 노드를 반환하고, 인덱스가 유효하지 않으면 정의되지 않은 노드를 반환해야 합니다.
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
};
