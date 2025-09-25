import { solution } from './01-음양-더하기';

/**
absolutes  signs                result
[4,7,12]   [true,false,true]    9
[1,2,3]    [false,false,true]   0
 */

describe('250925 / 01-음양-더하기', () => {
  it('solution() === 9', () => {
    const result = solution([4,7,12], [true,false,true]);
    expect(result).toBe(9);
  });

  it('solution() === 0', () => {
    const result = solution([1,2,3], [false,false,true]);
    expect(result).toBe(0);
  });
});
