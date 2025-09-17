import { solution } from './02-삼총사-gpt';

/**
number                     result
[-2, 3, 0, 2, -5]          2
[-3, -2, -1, 0, 1, 2, 3]   5
[-1, 1, -1, 1]             0
 */

describe('250917 / 02-삼총사-gpt', () => {
  it('solution() === 2', () => {
    const result = solution([-2, 3, 0, 2, -5]);
    expect(result).toBe(2);
  });

  it('solution() === 5', () => {
    const result = solution([-3, -2, -1, 0, 1, 2, 3]);
    expect(result).toBe(5);
  });

  it('solution() === 0', () => {
    const result = solution([-1, 1, -1, 1]);
    expect(result).toBe(0);
  });
});
