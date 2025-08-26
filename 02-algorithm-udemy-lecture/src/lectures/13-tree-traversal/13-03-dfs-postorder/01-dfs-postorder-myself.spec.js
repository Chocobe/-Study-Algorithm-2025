import { 
  Node,
  dfsPostorder,
} from './01-dfs-postorder-myself';

describe('13-02 / 01-dfs-postorder-myself', () => {
  /**      
   *      10 
   *   6      16
   * 3   8       20
   */
  it('dfsPostorder() => [3, 8, 6, 20, 16, 10]', () => {
    const rootNode = new Node(10);

    rootNode.left = new Node(6);
    rootNode.left.left = new Node(3);
    rootNode.left.right = new Node(8);

    rootNode.right = new Node(16);
    rootNode.right.right = new Node(20);

    const result = dfsPostorder(rootNode);
    expect(result).toEqual([3, 8, 6, 20, 16, 10]);
  });
});
