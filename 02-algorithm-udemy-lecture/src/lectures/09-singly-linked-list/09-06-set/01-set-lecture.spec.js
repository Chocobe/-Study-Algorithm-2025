import { SinglyLinkedList } from './01-set-lecture';

describe('09-06 / 01-set-myself', () => {
  it('SinglyLinkedList 의 set 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push('Hello');
    list.push('World');
    list.push('!');

    const result1 = list.set(0, '안녕하세요');
    expect(result1).toBe(true);
    expect(list.get(0).val).toBe('안녕하세요');

    const result2 = list.set(2, '???');
    expect(result2).toBe(true);
    expect(list.get(2).val).toBe('???');

    const result3 = list.set(-1, '123');
    expect(result3).toBe(false);

    const result4 = list.set(4, '123');
    expect(result4).toBe(false);
  });
});
