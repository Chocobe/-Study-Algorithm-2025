import { 
  Node,
  dfsPreorder_recursive,
  dfsPreorder_stack,
} from './01-dfs-preorder-myself';

describe('13-02 / 01-dfs-preorder-myself', () => {
  /**      
   *      10 
   *   6      16
   * 3   8       20
   */
  describe('DFS Preorder - recursive', () => {
    it('dfsPreorder_recursive() => [10, 6, 3, 8, 16, 20]', () => {
      const rootNode = new Node(10);

      rootNode.left = new Node(6);
      rootNode.left.left = new Node(3);
      rootNode.left.right = new Node(8);

      rootNode.right = new Node(16);
      rootNode.right.right = new Node(20);

      const result = dfsPreorder_recursive(rootNode);
      expect(result).toEqual([10, 6, 3, 8, 16, 20]);
    });
  });

  describe('DFS Preorder - stack', () => {
    it('dfsPreorder_stack => [10, 6, 3, 8, 16, 20]', () => {
      const rootNode = new Node(10);

      rootNode.left = new Node(6);
      rootNode.left.left = new Node(3);
      rootNode.left.right = new Node(8);

      rootNode.right = new Node(16);
      rootNode.right.right = new Node(20);

      const result = dfsPreorder_stack(rootNode);
      expect(result).toEqual([10, 6, 3, 8, 16, 20]);
    });
  });
});
