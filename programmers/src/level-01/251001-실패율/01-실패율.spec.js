import { solution } from './01-실패율';

/**
N    stages                     result
5,   [2, 1, 2, 6, 2, 4, 3, 3]   [3, 4, 2, 1, 5]
4,   [4, 4, 4, 4, 4]            [4, 1, 2, 3]
 */

describe('251001 / 01-실패율', () => {
  it('solution() === [3, 4, 2, 1, 5]', () => {
    const result = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
    expect(result).toEqual([3, 4, 2, 1, 5]);
  });

  it('solution() === [4, 1, 2, 3]', () => {
    const result = solution(4, [4, 4, 4, 4, 4]);
    expect(result).toEqual([4, 1, 2, 3]);
  });
});
