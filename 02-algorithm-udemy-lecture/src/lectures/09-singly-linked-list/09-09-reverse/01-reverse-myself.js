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

    // 현재 Node 변수 만들기
    let current = this.head;
    // 새로운 tail 변수 만들기
    let newTail = this.head;

    // 현재 Node 의 next 가 존재할 때까지 순회하며,
    while (current.next) {
      // 새로운 tail 을 현재 Node 로 변경하기
      newTail = current;
      // 현재 Node 변수를 현재 Node 의 next 로 변경하기
      current = current.next;
    }

    // 개수 -1
    this.length--;
    // 새로운 tail 의 next 를 null 로 변경하기
    newTail.next = null;
    // tail 을 새로운 tail 로 갱신하기
    this.tail = newTail;

    // 현재 Node 와 새로운 tail 이 같다면,
    if (current === newTail) {
      // head 를 null 로 변경하기
      this.head = null;
      // tail 을 null 로 변경하기
      this.tail = null;
    }

    // 현재 Node 반환하기
    return current;
  }

  shift() {
    // head 가 없다면,
    if (!this.head) {
      // undefined 반환하기
      return undefined;
    }

    // 현재 head 변수 만들기
    const currentHead = this.head;
    // this.head 를 현재 head.next 로 변경하기
    this.head = currentHead.next;
    // 현재 head.next 를 null 로 변경하기
    currentHead.next = null;
    // length -1
    this.length--;

    // this.head 가 null 이라면,
    if (!this.head) {
      // this.tail 도 null 로 변경하기
      this.tail = null;
    }

    // 현재 head 반환하기
    return currentHead;
  }

  unshift(val) {
    // 현재 head 를 변수에 담는다.
    const currentHead = this.head;

    // 새로운 Node 를 생성한다.
    const newNode = new Node(val);
    // 새로운 Node 의 next 를 현재 head 로 변경한다.
    newNode.next = currentHead;
    // this.head 를 새로운 Node 로 변경한다.
    this.head = newNode;
    // this.length +1
    this.length++;

    // 현재 head 가 없었다면,
    if (!currentHead) {
      // this.tail 을 새로운 Node 로 변경한다.
      this.tail = newNode;
    }

    // this 를 반환한다.
    return this;
  }

  get(index) {
    // index < 0 또는 index >= this.length 라면,
    if (index < 0 || index >= this.length) {
      // null 반환하기
      return null;
    }

    // loop 변수 만들기
    let loop = 0;
    // node 변수 만들기
    let node = this.head;

    // while (loop < index) 순회하며,
    while (loop < index) {
      // loop +1
      loop++;
      // node 를 node.next 로 변경하기
      node = node.next;
    }

    // node 반환하기
    return node;
  }

  set(index, val) {
    // 수정할 Node 찾기
    const targetNode = this.get(index);

    // 수정할 Node 가 없다면,
    if (!targetNode) {
      // false 반환하기
      return false;
    }

    // 값 변경하기
    targetNode.val = val;
    // true 반환하기
    return true;
  }

  insert(index, val) {
    // index < 0 또는 index > this.length 라면,
    if (index < 0 || index > this.length) {
      // false 반환하기
      return false;
    }

    // index 가 0 이라면,
    if (index === 0) {
      // unshift() 호출하기
      this.unshift(val);
      // true 반환하기
      return true;
    }
    // index 가 this.length 라면,
    else if (index === this.length) {
      // push() 호출하기
      this.push(val);
      // true 반환하기
      return true;
    }

    // 새로운 Node 생성하기
    const newNode = new Node(val);
    // index 이전 Node 조회하기
    const prevNode = this.get(index - 1);
    // 새로운 Node 의 next 를 이전 Node 의 next 로 변경하기
    newNode.next = prevNode.next;
    // 이전 Node 의 next 를 새로운 Node 로 변경하기
    prevNode.next = newNode;
    // length +1
    this.length++;

    // true 반환하기
    return true;
  }

  remove(index) {
    // index 가 0 미만이거나, this.length 보다 크거나 같다면,
    if (index < 0 || index >= this.length) {
      // undefined 반환하기
      return undefined;
    }

    // index 가 0 이라면,
    if (index === 0) {
      // shift() 호출하여 반환하기
      return this.shift();
    }
    // index 가 this.length - 1 이라면,
    else if (index === this.length - 1) {
      // pop() 호출하여 반환하기
      return this.pop();
    }

    // index 이전 Node 인, get(index - 1) 호출하여 변수로 저장하기
    const prevNode = this.get(index - 1);
    // 이전 Node 의 next 를 targetNode 변수로 저장하기
    const targetNode = prevNode.next;
    // 이전 Node 의 next 를 targetNode 의 next 로 변경하기
    prevNode.next = targetNode.next;
    // this.length -1
    this.length--;

    // targetNode 반환하기
    return targetNode;
  }

  reverse() {
    // 새로운 head Node 변수 만들기
    const newTailNode = this.head;
    // 새로운 nextNode 변수 만들기
    let newNextNode = null;

    // i = 0; i < this.length; i++ 순회하며,
    for (let i = 0; i < this.length; i++) {
      // head 를 현재 Node 로 사용하기
      const currentNode = this.head;
      // 현재 Node 의 next 를 this.head 로 변경한다.
      this.head = currentNode.next;
      // 현재 Node 의 next 를 새로운 nextNode 로 변경한다.
      currentNode.next = newNextNode;
      // 새로운 nextNode 를 현재 Node 로 변경한다.
      newNextNode = currentNode;
    }

    // 새로운 nextNode 를 head 로 변경한다.
    this.head = newNextNode;
    // 새로운 head Node 를 tail 로 변경한다.
    this.tail = newTailNode;

    // this 반환하기
    return this;
  }
}
