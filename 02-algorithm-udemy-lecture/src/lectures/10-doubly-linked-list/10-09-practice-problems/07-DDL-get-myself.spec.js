/**
var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);

doublyLinkedList.get(0).val // 5
doublyLinkedList.get(1).val // 10
doublyLinkedList.get(2).val // 15
doublyLinkedList.get(3).val // 20
doublyLinkedList.get(4) // null
 */

import { DoublyLinkedList } from './07-DDL-get-myself';

describe('10-09 / 07-DDL-get-myself', () => {
  it('DDL get() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    const result1 = list.get(0);
    expect(result1.val).toBe(5);

    const result2 = list.get(1);
    expect(result2.val).toBe(10);

    const result3 = list.get(2);
    expect(result3.val).toBe(15);

    const result4 = list.get(3);
    expect(result4.val).toBe(20);

    const result5 = list.get(4);
    expect(result5).toBeNull();
  });
});
