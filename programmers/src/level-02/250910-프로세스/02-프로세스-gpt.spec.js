import { solution } from './02-프로세스-gpt';

/**
priorities	        location	return
[2, 1, 3, 2]	      2	        1
[1, 1, 9, 1, 1, 1]	0	        5
 */

describe('250910 / 02-프로세스-gpt', () => {
  it('solution() === 1', () => {
    const result = solution([2, 1, 3, 2], 2);
    expect(result).toBe(1);
  });

  it.only('solution() === 5', () => {
    const result = solution([1, 1, 9, 1, 1, 1], 0);
    expect(result).toBe(5);
  });
});
