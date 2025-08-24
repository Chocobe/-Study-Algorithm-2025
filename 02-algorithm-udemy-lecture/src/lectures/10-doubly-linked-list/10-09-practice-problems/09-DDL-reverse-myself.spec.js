/**
let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)

doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val); // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
 */

import { DoublyLinkedList } from './09-DDL-reverse-myself';

describe('10-09 / 09-DDL-reverse-myself', () => {
  it('DDL reverse() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    list.reverse();

    expect(list.length).toBe(4);
    expect(list.head.val).toBe(20);
    expect(list.head.next.val).toBe(15);
    expect(list.head.next.next.val).toBe(10);
    expect(list.head.next.next.next.val).toBe(5);
    expect(list.tail.val).toBe(5);
    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  });
});
