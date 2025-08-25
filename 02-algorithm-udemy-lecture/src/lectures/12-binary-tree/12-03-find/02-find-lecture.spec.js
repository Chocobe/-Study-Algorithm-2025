import { BinarySearchTree } from './02-find-lecture';

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

    const result1 = bst.find(10);
    expect(result1.value).toBe(10);

    const result2 = bst.find(7);
    expect(result2.value).toBe(7);

    const result3 = bst.find(13);
    expect(result3.value).toBe(13);

    const result4 = bst.find(16);
    expect(result4.value).toBe(16);

    const result5 = bst.find(3);
    expect(result5).toBeNull();

    const result6 = bst.find(100);
    expect(result6).toBeNull();
  });
});
