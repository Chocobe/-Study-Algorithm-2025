import { DoublyLinkedList } from './01-unshift-myself';

describe('10-04 / 01-unshift-myself', () => {
  it('DoublyLinkedList 의 unshift() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.unshift(100);
    expect(list.head.val).toBe(100);
    expect(list.tail.val).toBe(100);
    expect(list.length).toBe(1);

    list.unshift(200);
    expect(list.head.val).toBe(200);
    expect(list.tail.val).toBe(100);
    expect(list.length).toBe(2);

    list.unshift(300);
    expect(list.head.val).toBe(300);
    expect(list.head.next.val).toBe(200);
    expect(list.tail.val).toBe(100);
    expect(list.length).toBe(3);
  });
});
