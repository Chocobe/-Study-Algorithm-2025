import { SinglyLinkedList } from './01-singly-linked-list-push-myself';

/**
 * SLL(SinglyLinkedList) - push 연습
 * => SinglyLinkedList 클래스에서 다음을 구현합니다:
 * 
 * => push
 * 
 * => 이 함수는 값을 받아 SinglyLinkedList의 끝에 노드를 추가해야 합니다.
 * => 이 함수는 SinglyLinkedList를 반환해야 합니다.
 * 
 * @example
 * singlyLinkedList.push(5); // singlyLinkedList
 * singlyLinkedList.length; // 1
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.tail.val; // 5
 * 
 * singlyLinkedList.push(10); // singlyLinkedList
 * singlyLinkedList.length; // 2
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.head.next.val; // 10
 * singlyLinkedList.tail.val; // 10
 * 
 * singlyLinkedList.push(15); // singlyLinkedList
 * singlyLinkedList.length; // 3
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.head.next.val; // 10
 * singlyLinkedList.head.next.next.val; // 15
 * singlyLinkedList.tail.val; // 15
 */
describe('20-01 / 01-singly-linked-list-push-myself', () => {
  it('SinglyLinkedList 의 push() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list.push(5);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(5);
    expect(list.tail.val).toBe(5);

    list.push(10);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.tail.val).toBe(10);

    list.push(15);
    expect(list.length).toBe(3);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.head.next.next.val).toBe(15);
    expect(list.tail.val).toBe(15);
  });
});
