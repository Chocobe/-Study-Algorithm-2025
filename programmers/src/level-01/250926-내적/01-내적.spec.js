import { solution } from './01-내적';

/**
a           b             result
[1,2,3,4]   [-3,-1,0,2]   3
[-1,0,1]    [1,0,-1]      -2
 */

describe('250926 / 01-내적', () => {
  it('solution() === 3', () => {
    const result = solution([1,2,3,4], [-3,-1,0,2]);
    expect(result).toBe(3);
  });

  it('solution() === -2', () => {
    const result = solution([-1,0,1], [1,0,-1]);
    expect(result).toBe(-2);
  });
});
