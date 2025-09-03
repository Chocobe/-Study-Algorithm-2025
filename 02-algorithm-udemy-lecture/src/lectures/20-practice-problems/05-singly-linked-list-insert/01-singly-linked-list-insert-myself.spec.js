import { SinglyLinkedList } from './01-singly-linked-list-insert-myself';

/**
 * SLL (SinglyLinkedList) - insert 연습
 * => SinglyLinkedList 클래스에서 다음을 구현합니다:
 * 
 * => insert
 * 
 * => 이 함수는 SinglyLinkedList의 지정된 인덱스에 노드를 삽입해야 합니다.
 * => 인덱스가 유효하면 true를 반환하고 인덱스가 유효하지 않은 경우(0보다 작거나 목록 길이보다 큰 경우) false를 반환해야 합니다.
 * => (참고: push를 다시 구현할 필요 없습니다. 테스트에 함께 제공됩니다.)
 * 
 * @example
 * 
 * var singlyLinkedList = new SinglyLinkedList;
 * singlyLinkedList.push(5).push(10).push(15).push(20);
 * 
 * singlyLinkedList.insert(2,12); // true
 * singlyLinkedList.insert(100,12); // false
 * singlyLinkedList.length // 5
 * singlyLinkedList.head.val // 5
 * singlyLinkedList.head.next.val // 10
 * singlyLinkedList.head.next.next.val // 12
 * singlyLinkedList.head.next.next.next.val // 15
 * singlyLinkedList.head.next.next.next.next.val // 20
 * 
 * singlyLinkedList.insert(5,25); // true
 * singlyLinkedList.head.next.next.next.next.next.val //25
 * singlyLinkedList.tail.val // 25
 */
describe('20-05 / 01-singly-linked-list-insert-myself', () => {
  it('SinglyLinkedList 의 insert() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    const result1 = list.insert(2, 12);
    expect(result1).toBe(true);

    const result2 = list.insert(100, 12);
    expect(result2).toBe(false);

    expect(list.length).toBe(5);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.head.next.next.val).toBe(12);
    expect(list.head.next.next.next.val).toBe(15);
    expect(list.head.next.next.next.next.val).toBe(20);

    const result3 = list.insert(5, 25);
    expect(result3).toBe(true);
    expect(list.head.next.next.next.next.next.val).toBe(25);
    expect(list.tail.val).toBe(25);
  });
});
