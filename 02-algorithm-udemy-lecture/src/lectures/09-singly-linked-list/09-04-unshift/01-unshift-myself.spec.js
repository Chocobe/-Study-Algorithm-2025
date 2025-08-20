import { SinglyLinkedList } from './01-unshift-myself';

describe('09-04 / 01-unshift-myself', () => {
  it('SinglyLinkedList 의 unshift() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.unshift('!');
    expect(list.head.val).toBe('!');
    expect(list.length).toBe(1);

    list.unshift('World');
    expect(list.head.val).toBe('World');
    expect(list.length).toBe(2);

    list.unshift('Hello');
    expect(list.head.val).toBe('Hello');
    expect(list.length).toBe(3);

    expect(list.head.next.val).toBe('World');
    expect(list.head.next.next.val).toBe('!');
    expect(list.head.next.next.next).toBeNull();
  });
});
