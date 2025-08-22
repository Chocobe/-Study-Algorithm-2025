import { DoublyLinkedList } from './01-shift-myself';

describe('10-03 / 01-shift-myself', () => {
  it('DoublyLinkedList 의 shift 를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    list.push(200);
    list.push(300);

    const result1 = list.shift();
    expect(result1.val).toBe(100);
    expect(result1.next).toBeNull();
    expect(result1.prev).toBeNull();
    expect(list.head.val).toBe(200);
    expect(list.head.prev).toBeNull();
    expect(list.length).toBe(2);

    const result2 = list.shift();
    expect(result2.val).toBe(200);
    expect(result2.next).toBeNull();
    expect(result2.prev).toBeNull();
    expect(list.head.val).toBe(300);
    expect(list.head.prev).toBeNull();
    expect(list.length).toBe(1);

    const result3 = list.shift();
    expect(result3.val).toBe(300);
    expect(result3.next).toBeNull();
    expect(result3.prev).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    const result4 = list.shift();
    expect(result4).toBeUndefined();
    expect(list.length).toBe(0);
  });
});
