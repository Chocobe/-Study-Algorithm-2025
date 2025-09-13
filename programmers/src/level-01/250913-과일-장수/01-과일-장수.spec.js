import { solution } from './01-과일-장수';

/**
k	  m	  score	                                 result
3	  4   [1, 2, 3, 1, 2, 3, 1]	8
4	  3  	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]   33
 */

describe('250913 / 01-과일-장수', () => {
  it('solution() === 8', () => {
    const result = solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
    expect(result).toBe(8);
  });

  it('solution() === 33', () => {
    const result = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
    expect(result).toBe(33);
  });
});
