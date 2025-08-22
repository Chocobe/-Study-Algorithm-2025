import { DoublyLinkedList } from './01-pop-myself';

describe('10-02 / 01-pop-myself', () => {
  it('DoublyLinkedList 의 pop() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    list.push(200);
    list.push(300);

    const result1 = list.pop();
    expect(result1.val).toBe(300);
    expect(result1.prev).toBeNull();
    expect(list.length).toBe(2);
    expect(list.tail.val).toBe(200);
    expect(list.tail.next).toBeNull();

    const result2 = list.pop();
    expect(result2.val).toBe(200);
    expect(result2.prev).toBeNull();
    expect(list.tail.val).toBe(100);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(1);

    const result3 = list.pop();
    expect(result3.val).toBe(100);
    expect(result3.prev).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
    expect(list.length).toBe(0);
  });
});
