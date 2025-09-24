import { solution } from './02-로또의-최고-순위와-최저-순위-gpt';

/**
lottos                  win_nums                   result
[44, 1, 0, 0, 31, 25]   [31, 10, 45, 1, 6, 19]     [3, 5]
[0, 0, 0, 0, 0, 0]      [38, 19, 20, 40, 15, 25]   [1, 6]
[45, 4, 35, 20, 3, 9]   [20, 9, 3, 45, 4, 35]      [1, 1]
 */

describe('250924 / 02-로또의-최고-순위와-최저-순위-gpt', () => {
  it('solution() === [3, 5]', () => {
    const result = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
    expect(result).toEqual([3, 5]);
  });

  it('solution() === [1, 6]', () => {
    const result = solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
    expect(result).toEqual([1, 6]);
  });

  it('solution() === [1, 1]', () => {
    const result = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
    expect(result).toEqual([1, 1]);
  });
});
