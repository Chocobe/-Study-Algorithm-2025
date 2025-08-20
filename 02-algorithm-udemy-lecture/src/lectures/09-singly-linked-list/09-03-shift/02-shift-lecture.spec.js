import { SinglyLinkedList } from './02-shift-lecture';

describe('09-03 / 01-shift-myself', () => {
  it('SinglyLinkedList 의 shift() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push('Hello');
    list.push('World');

    const result1 = list.shift();
    expect(result1.val).toBe('Hello');
    expect(list.length).toBe(1);

    const result2 = list.shift();
    expect(result2.val).toBe('World');
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    const result3 = list.shift();
    expect(result3).toBeUndefined();
  });
});
