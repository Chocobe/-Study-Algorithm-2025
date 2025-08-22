import { DoublyLinkedList } from './01-push-myself';

describe('10-01 / 01-push-myself', () => {
  it('DoublyLinkedList 의 push 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    expect(list.head.val).toBe(100);
    expect(list.tail.val).toBe(100);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.length).toBe(1);

    list.push(200);
    expect(list.head.next.val).toBe(200);
    expect(list.tail.val).toBe(200);
    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(2);

    list.push(300);
    expect(list.head.next.next.val).toBe(300);
    expect(list.tail.val).toBe(300);
    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(3);
  });
});
