import { DoublyLinkedList } from './01-insert-myself';

describe('10-07 / 01-insert-myself', () => {
  it ('DoublyLinkedList 의 insert() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    const result1 = list.insert(0, 200);
    expect(result1).toBe(true);
    expect(list.head.val).toBe(200);
    expect(list.tail.val).toBe(200);
    expect(list.get(0).val).toBe(200);
    expect(list.length).toBe(1);

    const result2 = list.insert(0, 100);
    expect(result2).toBe(true);
    expect(list.head.val).toBe(100);
    expect(list.tail.val).toBe(200);
    expect(list.get(0).val).toBe(100);
    expect(list.length).toBe(2);

    const result3 = list.insert(1, 150);
    expect(result3).toBe(true);
    expect(list.head.next.val).toBe(150);
    expect(list.get(1).val).toBe(150);
    expect(list.tail.val).toBe(200);
    expect(list.length).toBe(3);

    const result4 = list.insert(3, 300);
    expect(result4).toBe(true);
    expect(list.tail.val).toBe(300);
    expect(list.get(3).val).toBe(300);
    expect(list.length).toBe(4);

    const result5 = list.insert(-1, 'invalid index');
    expect(result5).toBe(false);
    expect(list.length).toBe(4);

    const result6 = list.insert(5, 'invalid index');
    expect(result6).toBe(false);
    expect(list.length).toBe(4);
  });
});
