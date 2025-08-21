import { SinglyLinkedList } from './01-reverse-myself';

describe('09-09 / 01-reverse', () => {
  it('list.reverse() => [5, 4, 3, 2, 1]', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    list.reverse();
    expect(list.get(0).val).toBe(5);
    expect(list.get(1).val).toBe(4);
    expect(list.get(2).val).toBe(3);
    expect(list.get(3).val).toBe(2);
    expect(list.get(4).val).toBe(1);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(5);
  });

  it('list.reverse() => [2, 1]', () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);

    list.reverse();
    expect(list.get(0).val).toBe(2);
    expect(list.get(1).val).toBe(1);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(2);
  });

  it('list.reverse() => [1]', () => {
    const list = new SinglyLinkedList();

    list.push(1);

    list.reverse();
    expect(list.get(0).val).toBe(1);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(1);
  });

  it('list.reverse() => []', () => {
    const list = new SinglyLinkedList();

    list.reverse();
    expect(list.get(0)).toBeNull();
  });
});
