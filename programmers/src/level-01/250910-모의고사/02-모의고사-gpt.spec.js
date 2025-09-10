import { solution } from './02-모의고사-gpt';

/**
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
 */

describe('250910 / 02-모의고사-gpt', () => {
  it('solution() === [1]', () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).toEqual([1]);
  });

  it('solution() === [1, 2, 3]', () => {
    const result = solution([1, 3, 2, 4, 2]);
    expect(result).toEqual([1, 2, 3]);
  });
});
