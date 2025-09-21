import { solution } from './01-없는-숫자-더하기';

/**
numbers             result
[1,2,3,4,6,7,8,0]   14
[5,8,4,0,6,7,9]     6
 */

describe('250921 / 01-없는-숫자-더하기', () => {
  it('solution() === 14', () => {
    const result = solution([1,2,3,4,6,7,8,0]);
    expect(result).toBe(14);
  });

  it('solution() === 6', () => {
    const result = solution([5,8,4,0,6,7,9]);
    expect(result).toBe(6);
  });
});
