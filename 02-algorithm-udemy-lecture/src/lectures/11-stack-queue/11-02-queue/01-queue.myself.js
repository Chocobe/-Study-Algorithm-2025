export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // 새로운 Node 생성하기
    const newNode = new Node(val);
    // this.last 를 originLastNode 변수에 저장하기
    const originLastNode = this.last;

    // originLastNode 가 있다면,
    if (originLastNode) {
      // originLastNode.next 를 newNode 로 변경하기
      originLastNode.next = newNode;
    }
    // 없다면,
    else {
      // this.first 를 newNode 로 변경하기
      this.first = newNode;
    }

    // this.last 를 newNode 로 변경하기
    this.last = newNode;
    // this.size +1
    this.size++;
    // this.size 반환하기
    return this.size;
  }

  dequeue() {
    // this.size 가 없다면,
    if (!this.size) {
      // null 반환하기
      return null;
    }

    // this.first 를 targetNode 변수로 만들기
    const targetNode = this.first;
    // this.first 를 targetNode.next 로 변경하기
    this.first = targetNode.next;
    // targetNode.next 를 null 로 변경하기
    targetNode.next = null;
    // this.size -1
    this.size--;

    // this.size 가 없다면,
    if (!this.size) {
      // this.last 를 null 로 변경하기
      this.last = null;
    }

    // targetNode 반환하기
    return targetNode;
  }
}
