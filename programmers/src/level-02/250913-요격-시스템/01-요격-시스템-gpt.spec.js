import { solution } from './01-요격-시스템-gpt';

/**
targets	                                           result
[[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]   3
 */

describe('250913 / 01-요격-시스템', () => {
  it('solution() === 3', () => {
    const result = solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]);
    expect(result).toBe(3);
  });
});
