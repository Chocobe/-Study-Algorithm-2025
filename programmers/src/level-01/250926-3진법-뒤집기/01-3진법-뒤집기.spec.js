import { solution } from './01-3진법-뒤집기';

/**
n     result
45    7
125   229
 */

describe('250926 / 01-3진법-뒤집기', () => {
  it('solution() === 45', () => {
    const result = solution(45);
    expect(result).toBe(7);
  });

  it('solution() === 229', () => {
    const result = solution(125);
    expect(result).toBe(229);
  });
});
