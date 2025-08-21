import { SinglyLinkedList } from './01-get-myself';

describe('09-05 / 01-get-myself', () => {
  it('SinglyLinkedList 의 get 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push('Hello');
    list.push('World');
    list.push('!');

    const result1 = list.get(0);
    expect(result1.val).toBe('Hello');

    const result2 = list.get(1);
    expect(result2.val).toBe('World');

    const result3 = list.get(2);
    expect(result3.val).toBe('!');

    const result4 = list.get(3);
    expect(result4).toBeNull();

    const result5 = list.get(-1);
    expect(result5).toBeNull();
  });
});
