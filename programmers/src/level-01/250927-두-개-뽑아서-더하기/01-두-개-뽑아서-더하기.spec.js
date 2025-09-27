import { solution } from './01-두-개-뽑아서-더하기';

/**
numbers       result
[2,1,3,4,1]   [2,3,4,5,6,7]
[5,0,2,7]     [2,5,7,9,12]
 */

describe('250927 / 01-두-개-뽑아서-더하기', () => {
  it('solution() === [2, 3, 4, 5, 6, 7]', () => {
    const result = solution([2,1,3,4,1]);
    expect(result).toEqual([2,3,4,5,6,7]);
  });

  it('solution() === [2,5,7,9,12]', () => {
    const result = solution([5,0,2,7]);
    expect(result).toEqual([2,5,7,9,12]);
  });
});
