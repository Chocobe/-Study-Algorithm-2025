import { solution } from './01-광물-캐기';

/**
picks        minerals                                                                                                      result
[1, 3, 2],   ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"],                                12
[0, 1, 1],   ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"],   50
 */

describe('250930 / 01-광물-캐기', () => {
  it('solution() === 12', () => {
    const result = solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]);
    expect(result).toBe(12);
  });

  it('solution() === 50', () => {
    const result = solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]);
    expect(result).toBe(50);
  });
});
