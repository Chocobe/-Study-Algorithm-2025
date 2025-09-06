import { dfsTemplate } from './dfs.template';

/**
 * n: 9
 * start: 1
 * list: [1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
 */

describe('template-dfs', () => {
  it('개발 테스트', () => {
    const result = dfsTemplate(9, 1, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]);
    expect(result).toBe(true);
  });
});
