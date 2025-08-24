/**
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);

doublyLinkedList.remove(2).val; // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20
 */

import { DoublyLinkedList } from './05-DDL-remove-myself';

describe('10-09 / 05-DDL-remove-myself', () => {
  it('DDL remove() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    const result1 = list.remove(2)
    expect(result1.val).toBe(15);

    const result2 = list.remove(100);
    expect(result2).toBeUndefined();

    expect(list.length).toBe(3);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.head.next.next.val).toBe(20);
  });
});
