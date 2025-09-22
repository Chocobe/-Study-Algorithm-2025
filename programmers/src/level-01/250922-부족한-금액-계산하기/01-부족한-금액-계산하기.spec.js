import { solution } from './01-부족한-금액-계산하기';

/**
price   money   count   result
3       20      4       10
 */

describe('250922 / 01-부족한-금액-계산하기', () => {
  it('solution() === a', () => {
    const result = solution(3, 20, 4);
    expect(result).toBe(10);
  });
});
