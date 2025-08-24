/**
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.prev // null

doublyLinkedList.push(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.tail.val; // 10
doublyLinkedList.head.next.prev.val // 10

doublyLinkedList.push(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 15
doublyLinkedList.tail.prev.val; // 10
doublyLinkedList.head.next.next.val; // 15
 
doublyLinkedList.pop().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.pop().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.pop().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0
 */

import { DoublyLinkedList } from './06-DDL-pop-myself';

describe('10-09 / 06-DDL-pop-myself', () => {
  it('DDL pop() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(5);
    expect(list.tail.val).toBe(5);
    expect(list.head.prev).toBeNull();

    list.push(10);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.tail.val).toBe(10);
    expect(list.head.next.prev.val).toBe(5);

    list.push(15);
    expect(list.length).toBe(3);
    expect(list.head.val).toBe(5);
    expect(list.tail.val).toBe(15);
    expect(list.tail.prev.val).toBe(10);
    expect(list.head.next.next.val).toBe(15);

    const result1 = list.pop();
    expect(result1.val).toBe(15);
    expect(list.length).toBe(2);

    const result2 = list.pop();
    expect(result2.val).toBe(10);
    expect(list.length).toBe(1);

    const result3 = list.pop();
    expect(result3.val).toBe(5);
    expect(list.length).toBe(0);

    const result4 = list.pop();
    expect(result4).toBeUndefined();
    expect(list.length).toBe(0);
  });
});
