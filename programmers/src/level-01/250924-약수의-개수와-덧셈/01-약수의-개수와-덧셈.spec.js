import { solution } from './01-약수의-개수와-덧셈';

/**
left   right   result
13     17      43
24     27      52
 */

describe('250924 / 01-약수의-개수와-덧셈', () => {
  it('solution() === 43', () => {
    const result = solution(13, 17);
    expect(result).toBe(43);
  });

  it('solution() === 52', () => {
    const result = solution(24, 27);
    expect(result).toBe(52);
  });
});
