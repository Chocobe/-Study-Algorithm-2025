import { solution } from './02-피로도';

describe('250904 / 02-피로도', () => {
  it('solution() === 3', () => {
    const result = solution(80, [[80, 20], [50, 40], [30, 10]]);
    expect(result).toBe(3);
  });
});
