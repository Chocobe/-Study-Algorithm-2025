import { SinglyLinkedList } from './02-pop-lecture';

describe('09-02 / 02-pop-lecture', () => {
  it('SinglyLinkedList 의 pop() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();
    list.push('Hello');
    list.push('World');

    const result1 = list.pop();
    expect(result1.val).toBe('World');
    expect(list.length).toBe(1);
    expect(list.head).toEqual(list.tail);
    expect(list.tail.next).toBeNull();

    const result2 = list.pop();
    expect(result2.val).toBe('Hello');
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    const result3 = list.pop();
    expect(result3).toBeUndefined();
  });
});
