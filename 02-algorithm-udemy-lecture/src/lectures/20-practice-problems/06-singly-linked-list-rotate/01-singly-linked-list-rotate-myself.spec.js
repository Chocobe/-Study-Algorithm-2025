import { SinglyLinkedList } from './01-singly-linked-list-rotate-myself';

/**
 * SLL(SinglyLinkedList) - rotate 연습
 * => SinglyLinkedList 클래스에서 다음을 구현합니다:
 * 
 * => rotate
 * => 이 함수는 리스트의 모든 노드를 전달된 숫자만큼 회전시켜야 합니다. 
 * 예를 들어 목록이 1 -> 2 -> 3 -> 4 -> 5인데 2만큼 회전하면 목록은 3 -> 4 -> 5 -> 1 -> 2로 수정되어야 합니다. 
 * 회전하기 위해 전달된 숫자는 어떤 정수나 가능합니다.
 * 
 * => Time Complexity: O(N) (N은 리스트의 길이)
 * => Space Complexity: O(1)
 * => (참고: push가 rotate 함수를 테스트하는 데 도움이 되도록 포함되어 있습니다.)
 * 
 * @example
 * 
 * var singlyLinkedList = new SinglyLinkedList;
 * singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.tail.val; // 25;
 * 
 * singlyLinkedList.rotate(3);
 * singlyLinkedList.head.val; // 20
 * singlyLinkedList.head.next.val; // 25
 * singlyLinkedList.head.next.next.val; // 5
 * singlyLinkedList.head.next.next.next.val; // 10
 * singlyLinkedList.head.next.next.next.next.val; // 15
 * singlyLinkedList.tail.val; // 15
 * singlyLinkedList.tail.next; // null
 * 
 * 
 * var singlyLinkedList = new SinglyLinkedList;
 * singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.tail.val; // 25;
 * 
 * singlyLinkedList.rotate(-1);
 * singlyLinkedList.head.val; // 25
 * singlyLinkedList.head.next.val; // 5
 * singlyLinkedList.head.next.next.val; // 10
 * singlyLinkedList.head.next.next.next.val; // 15
 * singlyLinkedList.head.next.next.next.next.val; // 20
 * singlyLinkedList.tail.val; // 20
 * singlyLinkedList.tail.next // null
 * 
 * 
 * var singlyLinkedList = new SinglyLinkedList;
 * singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.tail.val; // 25;
 * 
 * singlyLinkedList.rotate(1000);
 * singlyLinkedList.head.val; // 5
 * singlyLinkedList.head.next.val; // 10
 * singlyLinkedList.head.next.next.val; // 15
 * singlyLinkedList.head.next.next.next.val; // 20
 * singlyLinkedList.head.next.next.next.next.val; // 25
 * singlyLinkedList.tail.val; // 25
 * singlyLinkedList.tail.next // null
 */
describe('20-06 / 01-singly-linked-list-insert-myself', () => {
  it('(1) SinglyLinkedList 의 rotate() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);

    list.rotate(3);
    expect(list.head.val).toBe(20);
    expect(list.head.next.val).toBe(25);
    expect(list.head.next.next.val).toBe(5);
    expect(list.head.next.next.next.val).toBe(10);
    expect(list.head.next.next.next.next.val).toBe(15);
    expect(list.tail.val).toBe(15);
    expect(list.tail.next).toBeNull();
  });

  it('(2) SinglyLinkedList 의 rotate() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);

    list.rotate(-1);
    expect(list.head.val).toBe(25);
    expect(list.head.next.val).toBe(5);
    expect(list.head.next.next.val).toBe(10);
    expect(list.head.next.next.next.val).toBe(15);
    expect(list.head.next.next.next.next.val).toBe(20);
    expect(list.tail.val).toBe(20);
    expect(list.tail.next).toBeNull();
  });

  it('(3) SinglyLinkedList 의 rotate() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20)
      .push(25);

    list.rotate(1_000);
    expect(list.head.val).toBe(5);
    expect(list.head.next.val).toBe(10);
    expect(list.head.next.next.val).toBe(15);
    expect(list.head.next.next.next.val).toBe(20);
    expect(list.head.next.next.next.next.val).toBe(25);
    expect(list.tail.val).toBe(25);
    expect(list.tail.next).toBeNull();
  });
});
