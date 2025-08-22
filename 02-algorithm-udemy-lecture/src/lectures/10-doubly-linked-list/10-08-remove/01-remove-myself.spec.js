import { DoublyLinkedList } from './01-remove-myself';

describe('10-08 / 01-remove-myself', () => {
  it('DoublyLinkedList 의 remove() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    list.push(200);
    list.push(300);
    list.push(400);
    list.push(500);

    const result1 = list.remove(0);
    expect(result1.val).toBe(100);
    expect(result1.next).toBeNull();
    expect(result1.prev).toBeNull();
    expect(list.head.val).toBe(200);
    expect(list.get(0).val).toBe(200);
    expect(list.length).toBe(4);

    const result2 = list.remove(3);
    expect(result2.val).toBe(500);
    expect(result2.next).toBeNull();
    expect(result2.prev).toBeNull();
    expect(list.tail.val).toBe(400);
    expect(list.get(2).val).toBe(400);
    expect(list.length).toBe(3);

    const result3 = list.remove(1);
    expect(result3.val).toBe(300);
    expect(result3.next).toBeNull();
    expect(result3.prev).toBeNull();
    expect(list.head.next.val).toBe(400);
    expect(list.tail.prev.val).toBe(200);
    expect(list.length).toBe(2);

    const result4 = list.remove(2);
    expect(result4).toBeUndefined();
    expect(list.length).toBe(2);

    const result5 = list.remove(-1);
    expect(result5).toBeUndefined();
    expect(list.length).toBe(2);
  });
});
