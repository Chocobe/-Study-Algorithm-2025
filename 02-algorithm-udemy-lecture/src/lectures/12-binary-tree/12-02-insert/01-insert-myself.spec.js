import { BinarySearchTree } from './01-insert-myself';

/**
 * @example
 *       10
 *   5         13 
 * 2   7    11    16
 */

describe('12-02 / 01-insert-myself', () => {
  it('BinarySearchTree 의 insert() 메소드를 사용할 수 있다.', () => {
    const bst = new BinarySearchTree();

    const result1 = bst.insert(10);
    expect(bst.root.value).toBe(10);
    expect(result1).toBe(bst);

    const result2 = bst.insert(5);
    expect(bst.root.left.value).toBe(5);
    expect(result2).toBe(bst);

    const result3 = bst.insert(7);
    expect(bst.root.left.right.value).toBe(7);
    expect(result3).toBe(bst);

    const result4 = bst.insert(13);
    expect(bst.root.right.value).toBe(13);
    expect(result4).toBe(bst);

    const result5 = bst.insert(2);
    expect(bst.root.left.left.value).toBe(2);
    expect(result5).toBe(bst);

    const result6 = bst.insert(16);
    expect(bst.root.right.right.value).toBe(16);
    expect(result6).toBe(bst);

    const result7 = bst.insert(11);
    expect(bst.root.right.left.value).toBe(11);
    expect(result7).toBe(bst);

    // 이미 입력된 값을 다시 입력하는 경우,
    const result8 = bst.insert(10);
    expect(result8).toBeUndefined();
  });
});
