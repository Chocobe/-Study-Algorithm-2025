import {
  Node,
  SinglyLinkedList,
} from './01-push-myself';

describe('09-01 / 01-push-myself', () => {
  it('SinglyLinkedList 의 push() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();
    expect(list.head).toBeNull();
    expect(list.length).toBe(0);

    list.push('Hello');
    expect(list.head).not.toBeNull();
    expect(list.head).toBe(list.tail);
    expect(list.length).toBe(1);

    list.push('World');
    expect(list.head.next).toBe(list.tail);
    expect(list.length).toBe(2);

    expect(list.head.val).toBe('Hello');
    expect(list.head.next.val).toBe('World');
    expect(list.tail.val).toBe('World');
    expect(list.head.next).toEqual(list.tail);
  });
});
