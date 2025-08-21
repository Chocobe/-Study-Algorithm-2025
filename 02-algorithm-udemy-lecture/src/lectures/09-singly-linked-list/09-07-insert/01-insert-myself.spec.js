import { SinglyLinkedList } from './01-insert-myself';

describe('09-07 / 01-insert-myself', () => {
  it('SinglyLinkedList 의 insert() 를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push('111');
    list.push('222');
    list.push('333');

    const result1 = list.insert(1, 'Hello');
    expect(result1).toBe(true);
    expect(list.get(1).val).toBe('Hello');
    expect(list.length).toBe(4);

    const result2 = list.insert(0, 'Miles');
    expect(result2).toBe(true);
    expect(list.get(0).val).toBe('Miles');
    expect(list.length).toBe(5);

    const result3 = list.insert(5, 'Kim');
    expect(result3).toBe(true);
    expect(list.get(5).val).toBe('Kim');
    expect(list.length).toBe(6);

    const result4 = list.insert(7, 'invalid insert');
    expect(result4).toBe(false);
    expect(list.length).toBe(6);
  });
});
