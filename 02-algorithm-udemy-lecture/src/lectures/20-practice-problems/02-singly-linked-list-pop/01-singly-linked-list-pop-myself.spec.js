import { SinglyLinkedList } from './01-singly-linked-list-pop-myself';

/**
 * SLL (SinglyLinkedList)- pop 연습
 * => SinglyLinkedList. prototype에서 다음을 구현합니다:
 * 
 * => pop
 * 
 * => 이 함수는 SinglyLinkedList의 끝에서 노드를 제거해야 합니다. 제거된 노드를 반환해야 합니다.
 * 
 * @example
 * 
 * var singlyLinkedList = new SinglyLinkedList();
 * 
 * singlyLinkedList.push(5); // singlyLinkedList
 * singlyLinkedList.push(10); // singlyLinkedList
 * singlyLinkedList.push(15); // singlyLinkedList
 * 
 * singlyLinkedList.pop().val; // 15
 * singlyLinkedList.tail.val; // 10
 * singlyLinkedList.length; // 2
 * 
 * singlyLinkedList.pop().val; // 10
 * singlyLinkedList.length; // 1
 * 
 * singlyLinkedList.pop().val; // 5
 * singlyLinkedList.length; // 0
 * 
 * singlyLinkedList.pop(); // undefined
 * singlyLinkedList.length; // 0
 */
describe('20-02 / 01-singly-linked-list-pop-myself', () => {
  it('SinglyLinkedList 의 pop() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15);

    const result1 = list.pop();
    expect(result1.val).toBe(15);
    expect(list.length).toBe(2);

    const result2 = list.pop();
    expect(result2.val).toBe(10);
    expect(list.length).toBe(1);

    const result3 = list.pop();
    expect(result3.val).toBe(5);
    expect(list.length).toBe(0);
  });
});
