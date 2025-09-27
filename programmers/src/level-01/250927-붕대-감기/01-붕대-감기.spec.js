import { solution } from './01-붕대-감기';

/**
bandage	    health   attacks                                result
[5, 1, 5]   30       [[2, 10], [9, 15], [10, 5], [11, 5]]   5
[3, 2, 7]	  20       [[1, 15], [5, 16], [8, 6]]             -1
[4, 2, 7]	  20       [[1, 15], [5, 16], [8, 6]]             -1
[1, 1, 1]	  5        [[1, 2], [3, 2]]                       3
 */

describe('250927 / 01-붕대-감기', () => {
  it('solution() === 5', () => {
    const result = solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]);
    expect(result).toBe(5);
  });

  it('solution() === -1', () => {
    const result = solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]);
    expect(result).toBe(-1);
  });

  it('solution() === -1', () => {
    const result = solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]);
    expect(result).toBe(-1);
  });

  it('solution() === 3', () => {
    const result = solution([1, 1, 1], 5, [[1, 2], [3, 2]]);
    expect(result).toBe(3);
  });
});
