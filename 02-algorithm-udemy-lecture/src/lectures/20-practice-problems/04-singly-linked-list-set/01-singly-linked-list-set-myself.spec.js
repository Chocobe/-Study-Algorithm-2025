import { SinglyLinkedList } from './01-singly-linked-list-set-myself';

/**
 * SLL(SinglyLinkedList) - set 연습
 * => SinglyLinkedList 클래스에서 다음을 구현합니다:
 * 
 * => set
 * 
 * => 이 함수는 인덱스와 값을 받아 해당 인덱스에 있는 SinglyLinkedList의 노드 값을 새 값으로 업데이트해야 합니다. 
 * => 노드가 성공적으로 업데이트되면 true를 반환하고, 유효하지 않은 인덱스가 전달되면 false를 반환해야 합니다.
 * => (참고: push는 다시 구현할 필요가 없습니다. 테스트에 함께 제공됩니다.)
 * 
 * @example
 * var singlyLinkedList = new SinglyLinkedList();
 * 
 * singlyLinkedList.set(0,10) // true
 * singlyLinkedList.set(1,2) // true
 * singlyLinkedList.length // 2
 * singlyLinkedList.head.val // 10
 * 
 * singlyLinkedList.set(10,10) // false
 * singlyLinkedList.set(3,100) // true
 * singlyLinkedList.head.next.next.next.val; // 10
 */
describe('20-04 / 01-singly-linked-list-set-myself', () => {
  it('SinglyLinkedList 의 set() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    const result1 = list.set(0, 10);
    expect(result1).toBe(true);

    const result2 = list.set(1, 2);
    expect(result2).toBe(true);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(10);

    const result3 = list.set(10, 10);
    expect(result3).toBe(false);

    const result4 = list.set(2, 100);
    expect(result4).toBe(true);
    expect(list.head.next.next.val).toBe(100);
  });
});
