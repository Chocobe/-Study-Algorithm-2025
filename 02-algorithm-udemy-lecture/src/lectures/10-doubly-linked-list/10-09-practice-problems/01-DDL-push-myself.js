/**
 * 문제1: LL(DoublyLinkedList) push - 연습
 * => DoublyLinkedList class에서 다음을 구현합니다.
 * => push
 * =>
 * => 이 함수는 값을 받고 주어진 값으로 DoublyLinkedList의 끝에 노드를 추가해야 합니다. 이 함수는 DoublyLinkedList를 반환해야 합니다.
 */

export class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

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
}
