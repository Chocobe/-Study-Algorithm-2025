/**
 * SLL (SinglyLinkedList) - insert 연습
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

  pop() {
    let currentNode = this.head;

    if (!currentNode) {
      return undefined;
    }

    if (currentNode === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentNode;
    }

    while (currentNode) {
      const nextNode = currentNode.next;

      if (nextNode === this.tail) {
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;

        return nextNode;
      }

      currentNode = nextNode;
    }

    return currentNode;
  }

  get(index) {
    if (index > this.length - 1) {
      return null;
    }

    let currentNode = this.head;

    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, val) {
    if (index === this.length) {
      this.push(val);
      return true;
    }

    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return true;
  }
}
