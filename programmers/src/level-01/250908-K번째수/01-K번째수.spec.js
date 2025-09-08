import { solution } from './01-K번째수';

describe('250908 / 01-K번째수', () => {
  it('solution() === a', () => {
    const results = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
    expect(results).toEqual([5, 6, 3]);
  });
});
