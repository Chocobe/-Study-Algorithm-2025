/**
var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.set(0,10) // true
doublyLinkedList.length // 4
doublyLinkedList.head.val // 10
 
doublyLinkedList.set(10,10) // false
 
doublyLinkedList.set(2,100) // true
doublyLinkedList.head.next.next.val; // 100
 */

import { DoublyLinkedList } from './04-DDL-set-myself';

describe('10-09 / 04-DDL-set-myself', () => {
  it ('DDL set() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    const result1 = list.set(0, 10);
    expect(result1).toBe(true);
    expect(list.length).toBe(4);
    expect(list.head.val).toBe(10);

    const result2 = list.set(10, 10);
    expect(result2).toBe(false);

    const result3 = list.set(2, 100);
    expect(result3).toBe(true);
    expect(list.head.next.next.val).toBe(100);
  });
});
