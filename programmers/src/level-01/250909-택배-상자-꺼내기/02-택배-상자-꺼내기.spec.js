import { solution } from './02-택배-상자-꺼내기';

/**
n	  w	num	result
22	6	8	  3
13	3	6	  4
 */

describe('250909 / 02-택배-상자-꺼내기', () => {
  it('solution() === 3', () => {
    const result = solution(22, 6, 8);
    expect(result).toBe(3);
  });

  it('solution() === 4', () => {
    const result = solution(13, 3, 6);
    expect(result).toBe(4);
  });

  it('solution() === 1', () => {
    const result = solution(3, 3, 2);
    expect(result).toBe(1);
  });

  it('solution() === 2', () => {
    const result = solution(6, 3, 3);
    expect(result).toBe(2);
  });
});
