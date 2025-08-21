import { SinglyLinkedList } from './01-remove-myself';

describe('09-08 / 01-remove-myself', () => {
  it('SinglyLinkedList 의 remove 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    const result1 = list.remove(1);
    expect(result1.val).toBe(2);
    expect(list.length).toBe(4);
    expect(list.get(1).val).toBe(3);

    const result2 = list.remove(0);
    expect(result2.val).toBe(1);
    expect(list.length).toBe(3);
    expect(list.get(0).val).toBe(3);

    const result3 = list.remove(2);
    expect(result3.val).toBe(5);
    expect(list.length).toBe(2);
    expect(list.get(1).val).toBe(4);

    const result4 = list.remove(2);
    expect(result4).toBeUndefined();
    expect(list.length).toBe(2);
  });
});
