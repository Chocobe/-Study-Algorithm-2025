import { solution } from './01-두-원-사이의-정수-쌍-gpt';

/**
r1   r2   result
2	   3    20
 */

describe('250914 / 01-두-원-사이의-정수-쌍', () => {
  it('solution() === 20', () => {
    const result = solution(2, 3);
    expect(result).toBe(20);
  });

  it('solution() === 56', () => {
    const result = solution(3, 5);
    expect(result).toBe(56);
  });

  it('solution() === 68', () => {
    const result = solution(4, 6);
    expect(result).toBe(68);
  });

  it('solution() === 248', () => {
    const result = solution(5, 10);
    expect(result).toBe(248);
  });
});
