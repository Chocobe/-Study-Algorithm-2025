import { DoublyLinkedList } from './01-set-myself';

describe('10-06 / 01-set-myself', () => {
  it('DoublyLinkedList 의 set() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    list.push(100);
    list.push(200);
    list.push(300);
    list.push(400);
    list.push(500);
    list.push(600);
    list.push(700);
    list.push(800);
    list.push(900);
    list.push(1000);

    const result1 = list.set(0, 'Hello');
    expect(result1).toBe(true);
    expect(list.get(0).val).toBe('Hello');

    const result2 = list.set(5, 'World');
    expect(result2).toBe(true);
    expect(list.get(5).val).toBe('World');

    const result3 = list.set(9, 'Miles');
    expect(result3).toBe(true);
    expect(list.get(9).val).toBe('Miles');

    const result4 = list.set(10, 'invalid access');
    expect(result4).toBe(false);

    expect(list.length).toBe(10);
  });
});
