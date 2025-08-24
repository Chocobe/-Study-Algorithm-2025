/**
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5

doublyLinkedList.unshift(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5

doublyLinkedList.unshift(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5
 */

import { DoublyLinkedList } from './02-DDL-unshift-myself';

describe('10-09 / 02-DDL-unshift-myself', () => {
  it('DDL unshift() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(5);
    expect(list.tail.val).toBe(5);

    list.unshift(10);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(10);
    expect(list.head.next.val).toBe(5);
    expect(list.tail.val).toBe(5);

    list.unshift(15);
    expect(list.length).toBe(3);
    expect(list.head.val).toBe(15);
    expect(list.tail.val).toBe(5);
    expect(list.head.next.next.val).toBe(5);
  });
});
