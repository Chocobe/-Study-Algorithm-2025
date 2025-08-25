import { BinarySearchTree } from './03-contains-lecture';

/**
 * @example
 *       10
 *   5         13 
 * 2   7    11    16
 */

describe('12-03 / 01-find-myself', () => {
  it('BinarySearchTree 의 find() 메소드를 사용할 수 있다.', () => {
    const bst = new BinarySearchTree();

    bst
      .insert(10)
      .insert(5)
      .insert(2)
      .insert(7)
      .insert(13)
      .insert(11)
      .insert(16);

    const result1 = bst.contains(10);
    expect(result1).toBe(true);

    const result2 = bst.contains(7);
    expect(result2).toBe(true);

    const result3 = bst.contains(13);
    expect(result3).toBe(true);

    const result4 = bst.contains(16);
    expect(result4).toBe(true);

    const result5 = bst.contains(3);
    expect(result5).toBe(false);

    const result6 = bst.contains(100);
    expect(result6).toBe(false);
  });
});
