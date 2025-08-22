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

  unshift(val) {
    // 새로운 Node 만들기
    const newNode = new Node(val);

    // this.head 가 있다면,
    if (this.head) {
      // this.head.prev 를 newNode 로 변경하기
      this.head.prev = newNode;
      // newNode 의 next 를 this.head 로 변경하기
      newNode.next = this.head;
    }
    // 없다면,
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

  get(index) {
    // index >= this.length 또는 index < 0 이라면,
    if (index >= this.length || index < 0) {
      // null 반환하기
      return null;
    }

    // isFromHead 변수를 만들고, index > this.length / 2 연산하기
    const isFromHead = index <= Math.floor(this.length / 2);
    // isFromHead 를 사용하여, targetNode 변수 만들기
    let targetNode = isFromHead ? this.head : this.tail;

    // isFromHead 라면, head 부터 탐색하기
    if (isFromHead) {
      // i = 0; i < index; i++ 순회하며,
      for (let i = 0; i < index; i++) {
        // targetNode 를 targetNode.next 로 변경하기
        targetNode = targetNode.next;
      }
    }
    // 아니라면, tail 부터 탐색하기
    else {
      // i = 0; i < this.length - index - 1; i++ 순회하며,
      for (let i = 0; i < this.length - index - 1; i++) {
        // targetNode 를 targetNode.prev 로 변경하기
        targetNode = targetNode.prev;
      }
    }

    // targetNode 반환하기
    return targetNode;
  }

  set(index, val) {
    // this.get() 으로 targetNode 변수 만들기
    const targetNode = this.get(index);

    // targetNode 가 없다면,
    if (!targetNode) {
      // false 반환하기
      return false;
    }

    // targetNode 의 값을 val 로 변경하기
    targetNode.val = val;
    // true 반환하기
    return true;
  }

  // insert(index, val) {
  //   // this.length 가 0 이고 index 도 0 이라면,
  //   if (this.length === 0 && index === 0) {
  //     // push() 호출하기
  //     this.push();
  //     // true 반환하기
  //     return true;
  //   }

  //   // get() 메소드로 조회한 Node 를 nextNode 변수로 만들기
  //   const nextNode = this.get(index);

  //   // nextNode 가 없다면,
  //   if (!nextNode) {
  //     // false 반환하기
  //     return false;
  //   }

  //   // 새로운 Node 를 생성하여 newNode 변수로 만들기
  //   const newNode = new Node(val);
  //   // nextNode.prev 를 prevNode 변수로 만들기
  //   const prevNode = nextNode.prev;

  //   // prevNode 가 있다면,
  //   if (prevNode) {
  //     // prevNode.next 를 newNode 로 변경하기
  //     prevNode.next = newNode;
  //     // newNode.prev 를 prevNode 로 변경하기
  //     newNode.prev = prevNode;
  //   }

  //   // nextNode.prev 를 newNode 로 변경하기
  //   nextNode.prev = newNode;
  //   // newNode.next 를 nextNode 로 변경하기
  //   newNode.next = nextNode;

  //   // index 가 0 이라면,
  //   if (index === 0) {
  //     // this.head 를 newNode 로 변경하기
  //     this.head = newNode;
  //   }

  //   // length +1
  //   this.length++;
  //   // true 반환하기
  //   return true;
  // }

  insert(index, val) {
    // index < 0 또는 index > this.length 이라면,
    if (index < 0 || index > this.length) {
      // false 반환하기
      return false;
    }

    // index === 0 이라면,
    if (index === 0) {
      // this.unshift() 호출하기
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

    // this.get() 으로 조회한 Node 를 nextNode 변수로 만들기
    const nextNode = this.get(index);
    // nextNode.prev 를 prevNode 변수로 만들기
    const prevNode = nextNode.prev;
    // 새로운 Node 를 생성하고, newNode 변수 만들기
    const newNode = new Node(val);

    // nextNode.prev 를 newNode 로 변경하기
    nextNode.prev = newNode;
    // prevNode.next 를 newNode 로 변경하기
    prevNode.next = newNode;

    // newNode.prev 를 prevNode 로 변경하기
    newNode.prev = prevNode;
    // newNode.next 를 nextNode 로 변경하기
    newNode.next = nextNode;

    // this.length +1
    this.length++;
    // true 반환하기
    return true;
  }

  remove(index) {
    // index < 0 또는 index >= this.length 라면,
    if (index < 0 || index >= this.length) {
      // false 반환하기
      return undefined;
    }

    // index === 0 이라면,
    if (index === 0) {
      // shift() 를 호출하여 반환하기
      return this.shift();
    }
    // index === this.length - 1 이라면,
    else if (index === this.length - 1) {
      // pop() 을 호출하여 반환하기
      return this.pop();
    }

    // get() 을 호출하여, targetNode 변수에 저장하기
    const targetNode = this.get(index);
    // targetNode.prev.next 를 targetNode.next 로 변경하기
    targetNode.prev.next = targetNode.next;
    // targetNode.next.prev 를 targetNode.prev 로 변경하기
    targetNode.next.prev = targetNode.prev;
    // this.length -1
    this.length--;

    // targetNode.next 를 null 로 변경하기
    targetNode.next = null;
    // targetNode.prev 를 null 로 변경하기
    targetNode.prev = null;

    // targetNode 반환하기
    return targetNode;
  }
};
