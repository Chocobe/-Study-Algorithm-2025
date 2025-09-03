/**
 * SLL(SinglyLinkedList) - push 연습
 */
export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
};
