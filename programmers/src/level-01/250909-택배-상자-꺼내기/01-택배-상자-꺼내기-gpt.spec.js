import { solution } from './01-택배-상자-꺼내기-gpt';

/**
n	  w	num	result
22	6	8	  3
13	3	6	  4
 */

describe('250909 / 01-택배-상자-꺼내기-gpt', () => {
  it('solution() === 3', () => {
    const result = solution(22, 6, 8);
    expect(result).toBe(3);
  });

  it('solution() === 4', () => {
    const result = solution(13, 3, 6);
    expect(result).toBe(4);
  });
});
