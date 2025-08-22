import { DoublyLinkedList } from './01-get-myself';

describe('10-05 / 01-get-myself', () => {
  it ('DoublyLinkedList 의 get() 메소드를 사용할 수 있다.', () => {
    const list = new DoublyLinkedList();

    const result1 = list.get(0);
    expect(result1).toBeNull();

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

    const result2 = list.get(0);
    expect(result2.val).toBe(100);

    const result3 = list.get(3);
    expect(result3.val).toBe(400);

    const result4 = list.get(9);
    expect(result4.val).toBe(1000);

    const result5 = list.get(10);
    expect(result5).toBeNull();

    const result6 = list.get(-1);
    expect(result6).toBeNull();
  });
});
