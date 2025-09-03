import { SinglyLinkedList } from './01-singly-linked-list-get-myself';

/**
 * SLL (SinglyLinkedList) - get 연습
 * => SinglyLinkedList 클래스에서 다음을 구현합니다:
 * 
 * => get
 * 
 * => 이 함수는 SinglyLinkedList의 지정된 인덱스에서 노드를 찾아야 합니다. 찾은 노드를 반환해야 합니다.
 * 
 * @example
 * var singlyLinkedList = new SinglyLinkedList();
 * 
 * singlyLinkedList.push(5).push(10).push(15).push(20);
 * 
 * singlyLinkedList.get(0).val // 5
 * 
 * singlyLinkedList.get(1).val // 10
 * 
 * singlyLinkedList.get(2).val // 15
 * 
 * singlyLinkedList.get(3).val // 20
 * 
 * singlyLinkedList.get(4) // null
 */
describe('20-03 / 01-singly-linked-list-pop-myself', () => {
  it('SinglyLinkedList 의 get() 메소드를 사용할 수 있다.', () => {
    const list = new SinglyLinkedList();

    list
      .push(5)
      .push(10)
      .push(15)
      .push(20);

    const result1 = list.get(0);
    expect(result1.val).toBe(5);

    const result2 = list.get(1);
    expect(result2.val).toBe(10);

    const result3 = list.get(2);
    expect(result3.val).toBe(15);

    const result4 = list.get(3);
    expect(result4.val).toBe(20);

    const result5 = list.get(4);
    expect(result5).toBeNull();
  });
});
