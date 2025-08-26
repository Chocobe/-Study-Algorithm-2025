import { Node, bfs } from './01-bfs-myself';

describe('13-01 / 01-bfs-myself', () => {
  /**      
   *      10 
   *   6      16
   * 3   8       20
   */
  it('bfs() => [10, 6, 16, 3, 8, 20]', () => {
    const rootNode = new Node(10);

    rootNode.left = new Node(6);
    rootNode.left.left = new Node(3);
    rootNode.left.right = new Node(8);

    rootNode.right = new Node(16);
    rootNode.right.right = new Node(20);

    const result = bfs(rootNode);
    expect(result).toEqual([10, 6, 16, 3, 8, 20]);
  });
});
