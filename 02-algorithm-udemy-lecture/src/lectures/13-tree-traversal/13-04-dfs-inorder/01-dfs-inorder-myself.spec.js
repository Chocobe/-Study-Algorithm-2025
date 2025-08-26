import { 
  Node,
  dfsInorder,
} from './01-dfs-inorder-myself';

describe('13-04 / 01-dfs-inorder-myself', () => {
  /**      
   *      10 
   *   6      16
   * 3   8       20
   */
  it('dfsInorder() => [3, 6, 8, 10, 16, 20]', () => {
    const rootNode = new Node(10);

    rootNode.left = new Node(6);
    rootNode.left.left = new Node(3);
    rootNode.left.right = new Node(8);

    rootNode.right = new Node(16);
    rootNode.right.right = new Node(20);

    const result = dfsInorder(rootNode);
    expect(result).toEqual([3, 6, 8, 10, 16, 20]);
  });
});
